import React, { Fragment, useState } from "react";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { addClient, addContainer } from "../../utils";
import { toast } from "react-toastify";
import axios from "axios";
import { useEffect } from "react";

const CustomContainer = () => {

	const [clientId, setClientId] = useState("")
	const [containerId, setContainerId] = useState("")

	// const onAddClient = async () => {
	// 	try {
	// 		const adde = await addContainer({
	// 			clientId: clientId,
	// 			containerId: containerId,
	// 		})
	// 		if (adde) {
	// 			toast.success("Container created successfully")
	// 		}
	// 	} catch (error) {
	// 		console.log(error)
	// 		toast.error(error.response.data.message)
	// 	}

	// }


	const onAddClient = async () => {
		try {
			const adde = await axios.post('http://localhost:4000/containers', {
				clientId,
				containerId
			})
			if (adde) {
				toast.success("Container created successfully")
			}
		} catch (error) {
			console.log(error)
			toast.error(error.response.data.message)
		}
	}


	return (
		<Fragment>
			<Tabs>
				<TabList className="nav nav-tabs tab-coupon">
					<Tab className="nav-link">Container</Tab>
				</TabList>
				<TabPanel>
					<Form className="needs-validation user-add" noValidate="">
						<h4>Container Details</h4>
						<FormGroup className="row">
							<Label className="col-xl-3 col-md-4">
								<span>*</span> ContainerID
							</Label>
							<div className="col-xl-8 col-md-7">
								<Input
									className="form-control"
									id="validationCustom0"
									value={containerId}
									onChange={(e) => setContainerId(e.target.value)}
									type="text"
									required=""
								/>
							</div>
						</FormGroup>
						<FormGroup className="row">
							<Label className="col-xl-3 col-md-4">
								<span>*</span> Client ID
							</Label>
							<div className="col-xl-8 col-md-7">
								<Input
									className="form-control"
									id="validationCustom1"
									value={clientId}
									onChange={(e) => setClientId(e.target.value)}
									type="text"
									required=""
								/>
							</div>
						</FormGroup>
						{/* <FormGroup className="row">
							<Label className="col-xl-3 col-md-4">
								<span>*</span> Client Email
							</Label>
							<div className="col-xl-8 col-md-7">
								<Input
									className="form-control"
									onChange={(e) => setEmail(e.target.value)}
									id="validationCustom3"
									type="number"
									required=""
								/>
							</div>
						</FormGroup> */}
					</Form>
				</TabPanel>

			</Tabs>
			<div className="pull-right">
				{/* <Button type="button" color="primary" onClick={() => { onAddClient() }}> */}
				<Button type="button" color="primary" onClick={onAddClient}>
					Save
				</Button>
			</div>
		</Fragment>
	);
};

export default CustomContainer;
