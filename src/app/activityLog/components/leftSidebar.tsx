'use client'

import { hexOpacity } from "@/utils/hexOpacity"
import AppTypography from "@styles/components/appTypography"
import Flex from "@styles/components/flex"
import { TypographyBold, TypographySize } from "@styles/style.types"
import theme from "@styles/theme"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { FaMap } from "react-icons/fa6"
import { GrVirtualMachine } from "react-icons/gr"
import { IoVideocam } from "react-icons/io5"
import { PiLineSegmentsBold } from "react-icons/pi"

const LeftSidebar = () => {
    const pathname = usePathname()
    const [pages, setPages] = useState([
        {
            name : 'Fvlco...',
            icon : GrVirtualMachine,
            active : false,
            url : '/activityLog/fvlconizationLogs'
        },
        {
            name : 'Segme....',
            icon : PiLineSegmentsBold,
            active : false,
            url : '/activityLog/segmentationLogs'
        },
        {
            name : 'Live...',
            icon : IoVideocam,
            active : false,
            url : '/activityLog/liveVisionLogs'
        },
        {
            name : 'Track...',
            icon : FaMap,
            active : false,
            url : '/activityLog/trackingLogs'
        },
    ])
    
    useEffect(()=>{
        setPages(prev =>
            prev.map((item, i) => 
              item.url === pathname ? { ...item, active: true } : { ...item, active: false }
            )
          );
        console.log(pathname)
    },[pathname])

    return (
        <div
            className="fixed z-10 top-0 left-[70px] flex flex-col w-[120px] h-[100vh] bg-bg-tetiary p-2 py-6 gap-2"
        >
            {
                pages.map((item, index : number) => (
                    <Link
                        href={item.url} 
                        className={`p-2 px-4 rounded-full cursor-pointer duration-500 hover:duration-300 hover:opacity-[0.6] hover:scale-[0.95]`}
                        style={{
                            backgroundColor : item.active ? `${theme.colors.main.primary}${hexOpacity(10)}` : '',
                        }}
                        key={index}
                    >
                        <Flex
                            width="fit-content"
                            gap={4}
                        >
                            <item.icon 
                                color={item.active ? theme.colors.main.primary : theme.colors.text.secondary}
                            />
                            <AppTypography
                                textColor={item.active ? theme.colors.main.primary : theme.colors.text.secondary}
                                bold={item.active ? TypographyBold.sm2 : TypographyBold.sm}
                                className="duration-500"
                                maxLines={1}
                                ellipsis
                                size={TypographySize.body}
                            >
                                {item.name}
                            </AppTypography>
                        </Flex>
                    </Link>
                ))
            }
        </div>
    )
}
export default LeftSidebar