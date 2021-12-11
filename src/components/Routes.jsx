import { Redirect } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import {Route} from 'react-router-dom'
import { Results } from './Results'
export const Routesp = () => {
    return(
        <div className='p-4'>
            <Switch>
                <Route exact path="/">
                    <Redirect to = "/search"/>
                </Route>
                <Route exact path = {['/search','/images','/news','/videos']}>
                    <Results/>
                </Route>
            </Switch>
        </div>
    )
}