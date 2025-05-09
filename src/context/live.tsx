'use client'

import { mediaType } from '@/app/dashboard/home/components/images/controls';
import { camExplorerData } from '@/app/live/components/profile container/camera links/camExplorerData';
import { activeCameraType, FolderOrCamera } from '@/utils/@types';
import { protectedAPI } from '@/utils/api/api';
import { message } from 'antd';
import React, { createContext, useState, ReactNode } from 'react';
import { Dispatch } from 'react';

export const liveContext = createContext<{
    activeCameras : activeCameraType[]
    setActiveCameras: React.Dispatch<React.SetStateAction<activeCameraType[]>>
    numberOfCamerasPerPage : number
    setNumberOfCamerasPerPage: React.Dispatch<React.SetStateAction<number>>
    folders: FolderOrCamera[]
    setFolders: React.Dispatch<React.SetStateAction<FolderOrCamera[]>>
}>({
    activeCameras : [],
    setActiveCameras: ()=>{},
    numberOfCamerasPerPage : 0,
    setNumberOfCamerasPerPage : ()=>{},
    folders : [],
    setFolders : ()=> {}
});

export const LiveProvider = ({ children }: { children: ReactNode }) => {
    const [activeCameras, setActiveCameras] = useState<activeCameraType[]>([
        // {
        //     id : '1',
        //     url : "https://ljexe63ri7c60g-4000.proxy.runpod.net/",
        //     location : 'Osu Accra',
        //     streamName : "my_stream_name",
        //     coordinates : [5.558, -0.187]
        // },
        // {
        //     id : '2',
        //     url : "https://ljexe63ri7c60g-3000.proxy.runpod.net/",
        //     location : 'Kumasi',
        //     streamName : "stream2",
        //     coordinates : [6.669450646774655, -1.5176043915812956]
        // },
        // {
        //     id : '3',
        //     url : "https://ljexe63ri7c60g-4000.proxy.runpod.net/output6.m3u8",
        //     location : 'Kumasi',
        //     streamName : "stream2",
        //     coordinates : [6.669450646774655, -1.5176043915812956]
        // },
        // {
        //     id : '4',
        //     url : "https://ljexe63ri7c60g-3000.proxy.runpod.net/output1.m3u8",
        //     location : 'Kumasi',
        //     streamName : "stream2",
        //     coordinates : [6.669450646774655, -1.5176043915812956]
        // },
        {
            id : '5',
            url : "/assets/dev/simulated-plates-stream/outputShort.mp4",
            location : 'Kumasi',
            streamName : "stream2",
            coordinates : [6.669450646774655, -1.5176043915812956]
        },
        {
            id : '6',
            url : "/assets/dev/simulated-plates-stream/outputLong.mp4",
            location : 'Kumasi',
            streamName : "stream2",
            coordinates : [6.669450646774655, -1.5176043915812956]
        },
        {
            id : '8',
            url : "/assets/dev/simulated-plates-stream/output3.mp4",
            location : 'Kumasi',
            streamName : "stream2",
            coordinates : [6.669450646774655, -1.5176043915812956]
        },
        {
            id : '9',
            url : "/assets/dev/simulated-plates-stream/output4.mp4",
            location : 'Kumasi',
            streamName : "stream2",
            coordinates : [6.669450646774655, -1.5176043915812956]
        },
        // {
        //     id : '10',
        //     url : "https://ljexe63ri7c60g-3000.proxy.runpod.net/output6.m3u8",
        //     location : 'Kumasi',
        //     streamName : "stream2",
        //     coordinates : [6.669450646774655, -1.5176043915812956],
        //     type : "feed"
        // },
        {
            id : '11',
            url : "/assets/dev/simulated-people-stream/person-school.mp4",
            location : 'Kumasi',
            streamName : "stream2",
            coordinates : [6.669450646774655, -1.5176043915812956]
        },
        {
            id : '11',
            url : "/assets/dev/simulated-people-stream/person-mall.mp4",
            location : 'Kumasi',
            streamName : "stream2",
            coordinates : [6.669450646774655, -1.5176043915812956]
        },
        {
            id : '11',
            url : "/assets/dev/simulated-people-stream/person-towncouncil.mp4",
            location : 'Kumasi',
            streamName : "stream2",
            coordinates : [6.669450646774655, -1.5176043915812956]
        },
        {
            id : '11',
            url : "/assets/dev/simulated-people-stream/person-church.mp4",
            location : 'Kumasi',
            streamName : "stream2",
            coordinates : [6.669450646774655, -1.5176043915812956]
        },
    ])
    const [numberOfCamerasPerPage, setNumberOfCamerasPerPage] = useState<number>(4)
    const [folders, setFolders] = useState<FolderOrCamera[]>([]);
    return (
        <liveContext.Provider value={{ 
            activeCameras,
            setActiveCameras,
            numberOfCamerasPerPage,
            setNumberOfCamerasPerPage,
            folders,
            setFolders
         }}>
            {children}
        </liveContext.Provider>
    );
};
