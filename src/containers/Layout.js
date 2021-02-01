import { Row, Col } from "antd";
import Header from '../components/Header'
import ProfileLoader from '../components/ProfileLoader'

const Layout = () => {
    return (
        <>
            <Header/>
            <Row justify="center">
                <Col xs={{ span: 23 }} md={{ span: 20 }} className="bg-light board">
                    <ProfileLoader/>
                </Col>
            </Row>
        </>
    )
}

export default Layout
