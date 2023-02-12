import { Button } from '@mui/material';
import React, { Fragment, useState } from 'react'
import { Card, CardHeader, Container } from 'reactstrap';
import ClientReport from './clientReport';
import Breadcrumb from "../common/breadcrumb";
import Reporting from './report';
import './report.css'
import Switcher from './reportSwitch'

const ReportTyp = () => {
    const [reportType, setReportType] = useState("client")
    const [activeClient, setActiveClient] = useState(true)
    const [activeContainer, setActiveContainer] = useState(false)


    const handleClient = () => {
        setReportType("client")
        setActiveClient(true)
        setActiveContainer(false)

    }

    const handleContainer = () => {
        setReportType("container")
        setActiveContainer(true)
        setActiveClient(false)

    }

    return (
        <>
            <Fragment>
                {
                    reportType === 'client'
                        ?
                        <Breadcrumb title="Report" parent="Clients" />
                        :
                        reportType === 'container'
                            ?
                            <Breadcrumb title="Report" parent="Container" />
                            :
                            null
                }
                <Container fluid={true}>
                    <Card>
                        {
                            reportType === 'client'
                                ?
                                <CardHeader>
                                    <h5> Client Report</h5>
                                </CardHeader>
                                :
                                reportType === 'container'
                                    ?
                                    <CardHeader>
                                        <h5> Container Report</h5>
                                    </CardHeader>
                                    :
                                    null
                        }
                        <div className='container-switcher'>
                            <div className='switcher'>
                                {
                                    activeClient
                                        ?
                                        <Button variant='contained' size='small' sx={{ backgroundColor: "#7e7cf4 " }} onClick={handleClient}> Client </Button>
                                        :
                                        <Button size='small' onClick={handleClient}> Client </Button>
                                }
                                {
                                    activeContainer
                                        ?
                                        <Button variant='contained' sx={{ backgroundColor: "#7e7cf4 " }} size='small' onClick={handleContainer}> Container </Button>
                                        :
                                        <Button onClick={handleContainer}> Container </Button>
                                }
                            </div>
                        </div>
                        {
                            reportType === 'container'
                                ?
                                <Reporting />
                                :
                                reportType === 'client'
                                    ?
                                    <ClientReport />
                                    :
                                    <h3 className='reportt'> Please Select Report Type </h3>
                        }
                    </Card>
                </Container>
            </Fragment>
        </>
    )
}

export default ReportTyp;