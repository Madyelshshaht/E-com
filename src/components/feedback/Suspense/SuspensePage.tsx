import { Suspense } from "react"
import { ReactNode } from "react"
import LottieHandler from "../LottieHandler/LottieHandler"


const SuspensePage = ({children} : {children: ReactNode} ) => {
    return (
        <Suspense fallback={<LottieHandler type='Loading' message='Loading Please Wait' style={{width: "400px"}}/>}>
            {children}
        </Suspense>
    )
}

export default SuspensePage;
