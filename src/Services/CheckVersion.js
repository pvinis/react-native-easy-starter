import {useEffect} from 'react'
import { useActions, useStore } from 'easy-peasy';
import CodePush from 'react-native-code-push';
import { STATUS } from '../Constants';
import NavigationService from '../Navigation/index';

export default () => {
    const checkAppVersion = useActions(actions =>  actions.app.checkAppVersion)
    
    const { status, version } = useStore( state => ({
        status : state.app.status,
        version : state.app.version
    }))
    
    // codepush app version
    // CodePush.sync()

    useEffect(()=> {
          status !== STATUS.SUCCESS && checkAppVersion()
    },[])

    useEffect(()=> {
        console.log('LOG_version reactor',version);        
        version && NavigationService.navigate("AppUpdate")        
    }, [version])


    return version
}