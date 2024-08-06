import axios from 'axios';
import React, { useMemo, useRef, useState } from 'react'
import { useQuery } from 'react-query'
import Score from './Score';
import { toast } from 'react-toastify';

export default function Home() {

    const [currIndex, setCurrIndex] = useState(0)
    let [listIndex, setListIndex] = useState(null)
    let [checkAns, setcheckAns] = useState(false)
    let [disabled, setDisabled] = useState(false)
    let [score, setScore] = useState(0);

    let { data} = useQuery('randomQuestions', () => axios.get('https://the-trivia-api.com/v2/questions'), { refetchOnWindowFocus: false })


    function shuffle(array) {
        let currentIndex = array.length;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {

            // Pick a remaining element...
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array
    }

    function nextQuestion() {
        if (currIndex <= 8) {
            setCurrIndex(currIndex + 1)
            setListIndex(null)
            setDisabled(false)

        }

    }

    function checkTrueAns(e, index) {
        setDisabled(true)
        setListIndex(index)
        let yourAns = e.target.getAttribute('data-ans');
        let corrcetAns = data?.data[currIndex]?.correctAnswer
        if (yourAns === corrcetAns) {
            setcheckAns(true)
            setScore(score + 10);
            toast.success("your answe is correct");
        }
        else {
            setcheckAns(false)
            toast.error("your answe is error");
        }

    }



    let arr = useMemo(() =>
        data ? shuffle([data?.data[currIndex]?.correctAnswer, ...data?.data[currIndex]?.incorrectAnswers]) : []
        , [data, currIndex])

    return (
        <div className='h-100 d-flex justify-content-center align-items-center'>
            {currIndex == 9 ? <Score score={score} index={setCurrIndex}></Score> :
                <div className="question-container  p-4 w-50 mx-auto " style={{ backgroundColor: '#3D3D3D', color: '#fff' }}>
                    <div className='d-flex justify-content-between align-item-center my-4'>
                        <span style={{ color: '#42A714' }} className='fw-bolder'>{currIndex + 1} / 10</span>
                        <span className='badge bg-green cursor-pointer' onClick={nextQuestion}>Next Ques</span>
                    </div>
                    <h5 className='my-3'>{data?.data[currIndex]?.question.text}</h5>
                    <div>
                        {arr.length > 0 ? arr.map((ans, index) =>
                            <button disabled={disabled} style={index == listIndex ? checkAns ?
                                { backgroundColor: '#42A714' } : { backgroundColor: 'red' } : { backgroundColor: '#212529', color: '#fff' }} key={index} onClick={(e) => { checkTrueAns(e, index) }} className={data?.data[currIndex]?.correctAnswer === ans && disabled ? 'my-3 cursor-pointer btn d-block bg-success form-control text-left' : 'my-3 cursor-pointer btn d-block form-control text-left'} data-ans={ans} >{ans}
                            </button>) : 'loading'}

                    </div>
                   

                </div>
            }
        </div>
    )
}
