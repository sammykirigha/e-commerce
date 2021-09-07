import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import Home from './home/Home'
import { Kids } from './kids/Kids'
import { Laptops } from './laptops/Laptops'
import Layout from './layout/Layout'
import Men from './men/Men'
import Others from './others/Others'
import Phones from './phones/Phones'
import Sports from './sports/Sports'
import Women from './women/Women'

const Dashboard = () => {
    const match = useRouteMatch()
    return (
        <div>
            <Layout>
                <Switch>
                    <Route exact path={`${match.path}`} component={Home} />
                    <Route path={`${match.path}/sports`} component={Sports} />
                    <Route path={`${match.path}/men`} component={Men} />
                    <Route path={`${match.path}/women`} component={Women} />
                    <Route path={`${match.path}/kids`} component={Kids} />
                    <Route path={`${match.path}/phones`} component={Phones} />
                    <Route path={`${match.path}/laptops`} component={Laptops} />
                    <Route path={`${match.path}/others`} component={Others} />
                    </Switch>
            </Layout>
        </div>
    )
}

export default Dashboard
