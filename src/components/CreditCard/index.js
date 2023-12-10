// Write your code here

import {useState} from 'react'
import {
  AppContainer,
  CreditCardDetailsContainer,
  CreditCardHeadingContainer,
  CreditCardHeading,
  HorizontalLine,
  CardContainer,
  Card,
  CardNumber,
  CardholderName,
  CardholderNameText,
  PaymentContainer,
  PaymentMethodContainer,
  PaymentMethodHeading,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [creditCardNumber, setCreditCard] = useState('')

  const [cardholderName, setCardholderName] = useState('')

  const creditCardholderNameUpperCase = cardholderName.toUpperCase()

  const onChangeCardNumber = event => {
    setCreditCard(event.target.value)
  }

  const onChangeCardholderName = event => {
    setCardholderName(event.target.value)
  }

  return (
    <AppContainer>
      <CreditCardDetailsContainer>
        <CreditCardHeadingContainer>
          <CreditCardHeading>CREDIT CARD</CreditCardHeading>
          <HorizontalLine />
        </CreditCardHeadingContainer>
        <CardContainer>
          <Card data-testid="creditCard">
            <CardNumber>{creditCardNumber}</CardNumber>
            <CardholderNameText>CARDHOLDER NAME</CardholderNameText>
            <CardholderName>{creditCardholderNameUpperCase}</CardholderName>
          </Card>
        </CardContainer>
      </CreditCardDetailsContainer>
      <PaymentContainer>
        <PaymentMethodContainer>
          <PaymentMethodHeading>Payment Method</PaymentMethodHeading>
          <Input
            type="text"
            placeholder="Card Number"
            value={creditCardNumber}
            onChange={onChangeCardNumber}
          />

          <Input
            type="text"
            placeholder="Cardholder Name"
            value={cardholderName}
            onChange={onChangeCardholderName}
          />
        </PaymentMethodContainer>
      </PaymentContainer>
    </AppContainer>
  )
}

export default CreditCard
