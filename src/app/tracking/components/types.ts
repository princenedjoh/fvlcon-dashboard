import { LatLngExpression } from "leaflet"

export enum ITrackingDataTypes {
    person = 'person',
    plate = 'plate',
    all = 'all'
}

export type ITrackingDataType = 'all' | 'plate' | 'person'

export type IPersonTrackingType = {
    id : string,
    name : string,
    type : ITrackingDataType,
    streamName : string,
    alias : string,
    lastSeen : string,
    coordinates : LatLngExpression & number[],
    timeSeen : Date,
    S3Key : string,
    faceId : string,
    imageUrl? : string
    userId : string
    similarity? : number
    niaDetails? : any
}

export interface IPersonTrackingWithImageType extends IPersonTrackingType {
    originalImageUrl? : string
}

export type IPlateTrackingType = {
    id : string
    plateNumber : string
    timestamp : string
    coordinates : LatLngExpression & number[];
    locationName : string
    S3Key : string,
    imageUrl : string
    type : ITrackingDataType
    userId : string
    dvlaDetails? : any
}

export interface ITrackingWaypointsType extends IPersonTrackingType {
    coordinates : LatLngExpression & number[],
    radius : number,
    color? : string
    fillColor? : string
}

export interface IPlateTrackingWaypoints extends IPlateTrackingType {
    coordinates : LatLngExpression & number[],
    radius : number,
    color? : string
    fillColor? : string
}

export type IPlateOrPerson = IPersonTrackingType | IPlateTrackingType

export interface ICamDetilasPersonDataType {
    faceId : string
    niaDetails? : any
    streamName : string
    lastSeen : string
    time : Date
    coordinates: LatLngExpression & number[]
}

export interface ICamDetailsPlate {
    numberPlate : string,
    lastSeen : string,
    time : Date
    coordinates: LatLngExpression & number[]
}