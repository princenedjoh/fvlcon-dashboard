import { useContext, useEffect, useRef, useState } from "react"
import Controls from "./controls"
import { liveContext } from "@/context/live"
import Player from 'next-video/player';
import theme from "@styles/theme";
import { getHLSStreamURL } from "../../utils/getHlsUrl";
import  FaceTracking from "@/utils/faceTracking";
import { message } from "antd";
import { getVideoElementFromMuxPlayer } from "./utils/getVideoElementFromMuxPlayer";
import { captureScreenshot } from "./utils/captureScreenshot";
import CapturedScreenshotImage from "./capturedScreenshotImage";
import { liveComponentsContext } from "../context";
import { recordStream } from "./utils/recordStream";
import useTimer from "@/utils/useTimer";

const LiveContainer = ({
    url,
    id,
    gridClass,
    streamName,
    index
} : {
    url : string,
    gridClass? : string,
    id : string,
    streamName? : string
    index : number
}) => {
    const liveRef = useRef<HTMLDivElement>(null)
    const [liveHeight, setLiveHeight] = useState(0)
    const [streamURL, setStreamURL] = useState<string>()
    const { activeCameras, numberOfCamerasPerPage } = useContext(liveContext)
    const [videoElement, setVideoElement] = useState<HTMLVideoElement>()
    const {setScreenShotUrl} = useContext(liveComponentsContext)
    const [isRecording, setIsRecording] = useState(false);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const {start, stop, seconds} = useTimer()
    const [canvasSize, setCanvasSize] = useState({
        width : 0,
        height : 0
    })

    const resizeLiveHeight = () => {
        const cameraWidth = liveRef.current?.offsetWidth
        if(cameraWidth){
            setLiveHeight(cameraWidth / (16/9))
            setCanvasSize({
                width : cameraWidth,
                height : cameraWidth / (16/9)
            })

        }
    }

    const setUpStream = async () => {
        if(streamName){
            try {
                const url = await getHLSStreamURL(streamName)
                setStreamURL(url)
            } catch (error) {
                console.log({error})
            }
        }
    }

    const startTracking = () => {
        const videoElement = getVideoElementFromMuxPlayer(id)
        if(videoElement){
            setVideoElement(videoElement)
            // faceTracking(videoElement, `CanvasContainer${id}`)
        }
    }

    const handleScreenshot = () => {
        const imageUrl = captureScreenshot(id)
        if(!imageUrl) 
            return
        setScreenShotUrl(imageUrl.dataUrl)
    }

    const handleRecord = () => {
        start()
        recordStream(id, isRecording, setIsRecording, stop);
    };

    useEffect(()=>{
        resizeLiveHeight()
    },[gridClass])
    
    useEffect(() => {
        const streamSetupInterval = setInterval(() => {
            setUpStream()
        }, 60000 * 3);
        setTimeout(() => {
            // startTracking()
        }, 3000);
        setUpStream()
        window.addEventListener('resize', resizeLiveHeight);
        return ()=> {
            window.removeEventListener('resize', resizeLiveHeight)
            clearInterval(streamSetupInterval)
        }
    }, []);
    return (
        <>
            <div
                ref={liveRef}
                className={`bg-bg-secondary flex flex-col relative rounded-lg max-h-full h-fit`}
            >
                <FaceTracking 
                    canvasSize={canvasSize}
                    canvasContainerID={`CanvasContainer${id}`}
                    videoElement={videoElement}
                />
                <Controls 
                    id={id} 
                    captureScreenshot={handleScreenshot}
                    handleRecord={handleRecord}
                    isRecording={isRecording}
                    timer={seconds}
                />
                <div 
                    className="w-full flex flex-grow justify-center items-center"
                    style={{
                        height : `${liveHeight}px`
                    }}
                >
                    {/* <iframe 
                        src={url}
                        title="stream"
                        width={'100%'}
                        height={'100%'}
                        id={id}
                        allowFullScreen
                        allow="accelerometer; autoplay; clipboard-write"
                    /> */}
                    <div id={id} className="w-full h-full relative">
                        <div id={`CanvasContainer${id}`} className="canvasContainer w-full h-full absolute pointer-events-none z-10 top-0 left-0">

                        </div>
                        <Player
                            src={url}
                            controls
                            style={{ height: '100%' }}
                            accentColor={theme.colors.bg.secondary}
                            playbackRates={[0.2, 0.5, 0.7, 1, 1.2, 1.5, 1.7, 2]}
                            placeholder="Stream"
                            autoPlay={true}
                            loop
                        />
                    </div>
                    {/* <div id={id} className="w-full h-full relative">
                        <div id={`CanvasContainer${id}`} className="canvasContainer w-full h-full absolute pointer-events-none z-10 top-0 left-0">

                        </div>
                        <video
                            src={url}
                            controls
                            style={{ height: '100%' }}
                            autoPlay={true}
                            loop
                        />
                    </div> */}
                    {/* <div id={id} className="w-full h-full relative">
                        <div id={`CanvasContainer${id}`} className="canvasContainer w-full h-full absolute pointer-events-none z-10 top-0 left-0">

                        </div>
                        <Player
                            src={streamURL}
                            controls
                            style={{ height: '100%' }}
                            accentColor={theme.colors.bg.secondary}
                            playbackRates={[0.2, 0.5, 0.7, 1, 1.2, 1.5, 1.7, 2]}
                            placeholder="Stream"
                            autoPlay={true}
                        />
                    </div> */}
                </div>
            </div>
        </>
    )
}
export default LiveContainer
