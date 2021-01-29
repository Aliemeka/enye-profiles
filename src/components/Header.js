import { Layout, Typography, Row } from 'antd';
const { Title } = Typography;

const AntHeader  = Layout.Header;

const Header = () => {
    return (
        <AntHeader>    
            <Row justify="center">
                <Title as="h1" level={1} className="light-text text-center">Enye Profiles</Title>
            </Row>
        </AntHeader>
    );
}

export default Header;
