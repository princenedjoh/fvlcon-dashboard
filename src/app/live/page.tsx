import ClickableTab from "@components/clickable/clickabletab"
import AppTypography from "@styles/components/appTypography"
import Flex from "@styles/components/flex"
import Controls from "./components/controls/controls"
import LiveView from "./components/liveView"
import Head from "@components/title/head"
import Searchbar from "@components/search/search"
import theme from "@styles/theme"
import { RiLiveFill } from "react-icons/ri"

const Live = () => {
    return (
        <div className="relative h-full w-full flex flex-col pr-[190px] gap-4">
            <Flex
                justify="space-between"
                align="center"
            >
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <RiLiveFill 
                            color={theme.colors.text.primary}
                            className="mt-[2px]"
                        />
                        <Head
                            typographyProps={{
                                ellipsis : true,
                                maxLines : 1,
                                whiteSpace : 'nowrap'
                            }}
                            title="Fvlcon Live Vision"
                        />
                    </div>
                    <Searchbar className="!w-[350px]"/>
                </div>
                <Controls />
            </Flex>
            <div className="flex relative w-full h-full">
                <LiveView />
            </div>
        </div>
    )
}
export default Live