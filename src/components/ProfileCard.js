import { Card, Row, Divider } from 'antd'


const { Meta } = Card

const ProfileCard = ({ profile }) => {
    return (
        <Card title={`${profile.FirstName} ${profile.LastName}`} style={{ width: "100%"}}>
            <Meta title={profile.UserName} description={profile.URL} />
            <p>Gender: {profile.Gender}</p>
            <p>Phone: {profile.PhoneNumber}</p>
            <Divider orientation="left">Login Details:</Divider>
            <Card type="inner" title={profile.LastLogin} style={{ marginTop: 16 }}>
                <p>Mac-Address: {profile.MacAddress}</p>
                <Row>
                    <p>Longitude: {profile.Longitude}</p>{" "}<p>Latitude: {profile.Latitude}</p>
                </Row>
            </Card>
            <Divider orientation="left">Payment Details:</Divider>
            <Card
            style={{ marginTop: 16 }}
            type="inner"
            title={profile.CreditCardNumber}
            extra={profile.CreditCardType}
            >
                <p>Payment details: {profile.PaymentMethod}</p>
            </Card>
        </Card>
    )
}

export default ProfileCard
