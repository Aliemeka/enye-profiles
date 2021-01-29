import { Row, Col, Typography, Space } from "antd";
import Header from '../components/Header'

const { Title } = Typography;

const Layout = () => {
    return (
        <>
            <Header/>
            <Row justify="center">
                <Col span={{ xs: 22, sm: 20, md: 18, lg: 14}} className="bg-light board">

                </Col>
            </Row>
        </>
    )
}

export default Layout
