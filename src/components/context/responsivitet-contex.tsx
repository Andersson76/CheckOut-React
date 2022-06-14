/* 
import React, { useEffect, useRef, useState } from "react";
import { FC, PropsWithChildren } from "react";

export interface DeviceContextData {
    devices: Device
    logCurrentDevice: () => void
}

export interface Device {
    isDesktop: boolean,
    isTablet: boolean,
    isMobile: boolean
}

const DefaultContextData: Device = {
    isDesktop: true,
    isTablet: false,
    isMobile: false
}

export const DeviceContext = React.createContext<DeviceContextData>({
    devices: DefaultContextData, 
    logCurrentDevice: () => {}
})

interface Props {}

const DeviceProvider: FC<PropsWithChildren<Props>> = (props) => {

    const [devices, setDevices] = useState<Device>(DefaultContextData)

    const logCurrentDevice: () => void = () => {
        if(devices.isDesktop) {
            console.log("Desktop");
        } else if(devices.isTablet) {
            console.log("Tablet");
        } else {
            console.log("Mobile");
        }
    }

    useEffect(() => {

        const onWindowChange = () => {
            if((window.innerWidth > 1250)) {
                setDevices({ isDesktop: true, isTablet: false, isMobile: false })
            } else if((window.innerWidth <= 1250 && window.innerWidth > 641)) {
                setDevices({ isDesktop: false, isTablet: true, isMobile: false })
            } else if((window.innerWidth <= 641)) {
                setDevices({ isDesktop: false, isTablet: false, isMobile: true} )
            }
        }

        onWindowChange()

        window.addEventListener("resize", onWindowChange)

    }, [])

    useEffect(() => {
    },[devices])

    return (
        <DeviceContext.Provider value={{devices, logCurrentDevice}}>
            {props.children}
        </DeviceContext.Provider>
    )
}

export default DeviceProvider */