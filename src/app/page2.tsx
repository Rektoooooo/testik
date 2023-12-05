import {SquareBlue, SquareGreen, SquarePurple, SquareRed, TextBlack, TextYellow} from "@/components/Square";
import Image from 'next/image'
import {Cat} from "@/components/Cat";
export default function home() {
    return (
        <div className="w-5/6 m-auto">
            <div className="flex flex-row justify-between my-10">
                <SquareBlue/>
                <SquareGreen/>
            </div>
            <div className="flex flex-row">
                <div className="flex flex-col w-3/5">
                    <TextYellow/>
                    <TextBlack/>
                    <div className="flex flex-row gap-5">
                        <SquarePurple/>
                        <SquarePurple/>
                    </div>
                </div>
                <div className="flex m-auto">
                    <SquareRed/>
                </div>
            </div>
        </div>
    )
}