import React, { useState } from 'react'
import NavbarCustomer from './NavbarCustomer'
import { Form, Button } from 'react-bootstrap'
import { Link } from "react-router-dom"
import axios from "axios"

const InitTicket = ({history}) => {
    const linkStyle = {
        color: "black",
    };

    const [tittle, setTittle] = useState("");
    const [category, setCategory] = useState("");
    const [detail, setDetail] = useState("");
    const [screenshot, setScreenshot] = useState("");
    const [urlVideo, setUrlVideo] = useState("");

    const token = localStorage.getItem('token');

    const submitHandle = (e) => {
        e.preventDefault();
        const ticketData = {
            complaint_name: tittle,
            categoryName: category,
            description: detail,
            screenshot: screenshot,
            url_video: urlVideo
        };
        axios.post("https://f4d7eb9f0cc9.ngrok.io/api/customer/tickets/init-ticket", ticketData)
          .then(res => {
            if (res.status === 200) {
              localStorage.setItem('token', JSON.stringify(res.data.token));
              history.push("/dashboardcustomer")
            } else {
              alert(res.data.status)
            }
          }, [history])
          .catch(err => {
            console.log(err)
            alert("Missing password");
          })
      }

    return (
        <div style={{ margin: "50px" }}>
            <NavbarCustomer />
            <Form className="container">
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control value={tittle}
                        required
                        onChange={(e) => setTittle(e.target.value)}
                        type="text"
                        name="tittle"
                        placeholder="Nama Asli" />
                </Form.Group>

                <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label>Category</Form.Label>
                    <Form.Control as="select" custom>
                        <option>Komplain Pelayanan</option>
                        <option>Pembukaan Rekening</option>
                        <option>Internet Banking</option>
                        <option>Mobile Banking</option>
                        <option>Others</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Detail issue</Form.Label>
                    <Form.Control as="textarea" rows={3} required />
                </Form.Group>

                <Form.Group>
                    <Form.File id="formcheck-api-regular">
                        <Form.File.Label>Screenshot</Form.File.Label>
                        <Form.File.Input />
                    </Form.File>
                </Form.Group>

                <Form.Group>
                    <Form.Label>URL (optional)</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Link style={this.linkStyle} to='/dashboardcustomer'>
                        <Button className="justify-content-end btn-danger" variant="primary" type="submit">
                            Cancel
                            </Button>
                    </Link>

                    <Button className="justify-content-end btn-success" variant="primary" type="submit">
                        Submit
                        </Button>
                </div>
            </Form>
        </div>
    );
}

export default InitTicket;
