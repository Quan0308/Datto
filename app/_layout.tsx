import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import React, { useEffect } from 'react'

const RootLayout = () => {
  const [fontsLoad, error ] = useFonts({
        "SpaceMono-Regular": require("../assets/fonts/SpaceMono-Regular.ttf"),
    })

    useEffect(() => {
        if(error)  throw error
        if(fontsLoad) SplashScreen.hideAsync()
    }, [fontsLoad, error])

    if(!fontsLoad && !error) return null
  //name="index" is the name of the screen (file) that will be rendered
  return (
   <Stack>
    <Stack.Screen name="index" options={{ headerShown: false }} /> 
   </Stack>
  )
}

export default RootLayout