import getDate from "@/utils/getDate"
import ClickableTab from "@components/clickable/clickabletab"
import AppTypography from "@styles/components/appTypography"
import Flex from "@styles/components/flex"
import { TypographyBold, TypographySize } from "@styles/style.types"
import theme from "@styles/theme"
import { MdCancel, MdFullscreen } from "react-icons/md"
import MatchCard from "./MatchCard"
import Overlay from "@components/overlay/overlay"
import Window from "@components/window/window"
import { useState } from "react"
import { AnimatePresence, motion } from 'framer-motion';
import Controls from "./controls"
import AllMatches from "./allMatches"

const Matches = () => {
    const [displayFaces, setDisplayFaces] = useState(false)
    const [displayAngels, setDisplayAngels] = useState(false)
    return (
        <>
            <motion.div  
                className="w-full relative flex flex-col flex-1 gap-1"
                initial={{
                    y : -20,
                    opacity : 0
                }}
                animate={{
                    y : 0,
                    opacity : 1
                }}
            >
                <div className="w-full absolute z-[-1] top-0 bg-gradient-container h-[200px] rounded-lg">
                </div>
                <div className="w-full rounded-lg px-3 py-2">
                    <Controls 
                        setDisplayWindow={setDisplayFaces}
                    />
                    <div className="w-full overflow-x-auto">
                        <Flex
                            gap={20}
                        >
                            {
                                [1,2,3,4,5,6,7,8,9].map((item, index : number) => (
                                    <MatchCard 
                                        key={index}
                                        title={`Match ${index + 1}`}
                                        rightButtonTitle="➜"
                                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
                                    />
                                ))
                            }
                        </Flex>
                    </div>
                </div>
            </motion.div>
            <AllMatches 
                display={displayFaces}
                setDisplay={setDisplayFaces}
            />
        </>
    )
}
export default Matches