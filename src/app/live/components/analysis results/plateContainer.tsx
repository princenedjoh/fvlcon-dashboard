import { IPersonTrackingWithImageType, IPlateTrackingType } from "@/app/tracking/components/types"
import { capitalizeString } from "@/utils/capitalizeString"
import { getRelativeTime } from "@/utils/getDate"
import ClickableTab from "@components/clickable/clickabletab"
import ZoomImage from "@components/zoomImage/zoomImage"
import Text from "@styles/components/text"
import { TypographySize } from "@styles/style.types"
import theme from "@styles/theme"
import { Tooltip } from "antd"
import Image from "next/image"
import Link from "next/link"
import { Dispatch, SetStateAction, useState } from "react"
import { FaLocationDot } from "react-icons/fa6"

const PlateContainer = ({
    detections,
    imageZoom,
    setImageZoom
} : {
    imageZoom: boolean
    setImageZoom: Dispatch<SetStateAction<boolean>>
    detections: IPlateTrackingType
}) => {
    return (
        <>
            <div className="flex flex-col gap-1 w-full">
                <div className="flex justify-between gap-2 items-center">
                    <Text
                        textColor={theme.colors.text.tetiary}
                    >
                        {capitalizeString(detections.type)}
                    </Text>
                    <Tooltip 
                        title="Track"
                        placement="left"
                    >
                        <Link href={`/tracking?personTrackingId=${detections.id}`}>
                            <ClickableTab>
                                <FaLocationDot 
                                    color={theme.colors.text.secondary}
                                    size={13}
                                />
                            </ClickableTab>
                        </Link>
                    </Tooltip>
                </div>
                <div className="flex gap-2 relative w-full bg-bg-tetiary justify-center rounded-lg">
                    {
                        detections.imageUrl &&
                        <div className="w-[65px] h-[65px] overflow-hidden bg-bg-secondary relative">
                            <Image
                                src={detections.imageUrl} 
                                alt="test-bg"
                                fill
                                style={{ objectFit: "cover" }}
                                onClick={()=>setImageZoom(true)}
                                className="lg:hover:scale-[1.2] duration-200 cursor-pointer hover:lg:opacity-70"
                            />
                        </div>
                    }
                </div>
                <div className="flex flex-col gap-[1px]">
                    <div className="flex gap-1">
                        <Text>
                            Plate No:
                        </Text>
                        <Text
                            textColor={theme.colors.text.primary}
                        >
                            {capitalizeString(detections.plateNumber)}
                        </Text>
                    </div>
                    <div className="flex flex-col gap-1">
                        <Text>
                            {getRelativeTime(new Date(detections.timestamp))}
                        </Text>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PlateContainer