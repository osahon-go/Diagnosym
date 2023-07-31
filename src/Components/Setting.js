
import { setHeightStatus, setScreenHeight } from "./features/ThemeSlice";

export const PageSetup = (containerHeight) => {
    if (containerHeight){
        if (containerHeight.current.clientHeight > window.innerHeight){
          setHeightStatus(1)
          setScreenHeight(window.innerHeight)
        }else{
          setHeightStatus(0)
          setScreenHeight(window.innerHeight)
        }
      }
}