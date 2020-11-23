import React, { useState } from 'react'
import NavbarCustomer from './NavbarCustomer'
import { Form, Button } from 'react-bootstrap'
import { Link } from "react-router-dom"
import axios from "axios"

const InitTicket = ({ history }) => {
    const linkStyle = {
        color: "black",
    };

    const [tittle, setTittle] = useState("");
    const [category, setCategory] = useState("Komplain layanan");
    const [detail, setDetail] = useState("");
    const [screenshot, setScreenshot] = useState("htpp://drive.google.com/image.jpg");
    const [urlVideo, setUrlVideo] = useState("");
    const [file, setFile] = useState([])

    const token = localStorage.getItem('token');

    const submitHandle = (e) => {
        e.preventDefault();
        // const formData = {
        //     file: file
        // }
        // axios.post("https://3671b2ca5014.ngrok.ioapi/file/upload", formData)
        //     .then(res => {
        const ticketData = {
            complaint_name: tittle,
            categoryName: category,
            categoryDetail: category,
            description: detail,
            screenshot: screenshot,
            url_video: urlVideo
        };
        // if (res.status === 200) {
        axios.post("https://3671b2ca5014.ngrok.io/api/customer/tickets/init-ticket", ticketData,
            {
                headers: {
                    "x-access-token": JSON.parse(localStorage.getItem('token'))
                }
            })
            .then(res => {
                if (res.status === 200) {
                    history.push("/dashboardcustomer")
                } else {
                    alert(res.data.status)
                }
            }, [history])
            .catch(err => {
                console.log(err)
                alert("Gagal menambahkan tiket");
            })
        //     } else {
        //         alert("Gagal upload gambar")
        //     }
        // })
        // .catch(err => {
        //     console.log(err)
        // })

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
                        name="tittle" />
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
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={detail}
                        required
                        onChange={(e) => setDetail(e.target.value)} />
                </Form.Group>

                <Form.Group>
                    {/* <Form.File id="formcheck-api-regular"> */}
                    <Form.Label>Screenshot</Form.Label>
                    <Form.Control
                        type="file"
                        onChange={(e) => setFile([...file, e.target.files[0]])}
                    />
                    {/* <Form.File.Label>Screenshot</Form.File.Label>
                        <Form.File.Input
                            value={file}
                            type="file"
                            onChange={(e) => setFile(e.target.value[0])}
                        /> */}
                    {/* </Form.File> */}
                </Form.Group>

                <Form.Group>
                    <Form.Label>URL (optional)</Form.Label>
                    <Form.Control
                        value={urlVideo}
                        onChange={(e) => setUrlVideo(e.target.value)}
                        type="text"
                        name="urlVideo" />
                </Form.Group>

                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Link style={linkStyle} to='/dashboardcustomer'>
                        <Button className="justify-content-end btn-danger" variant="primary">
                            Cancel
                            </Button>
                    </Link>

                    <Button className="justify-content-end btn-success" variant="primary" onClick={submitHandle}>
                        Submit
                        </Button>
                </div>
            </Form>
        </div>
    );
}

export default InitTicket;
