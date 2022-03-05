import React from 'react'
import styled from 'styled-components'
import Subscribe from '../Subscribe'

const Refunds = () => {
  return (
    <>
      <RootContainer>
        <RootTitle>Refunds</RootTitle>
        <RootBlock>
          <p>
            Items purchased from BetterLate Objects can be returned in most
            cases within 14 days of receipt. During this period, you can try and
            assess the products as you would in a physical store. When you want
            to return a product it must be in the same condition as when you
            received it, without any damage. You may remove products from their
            packaging unless the packaging is sealed. If you choose to return
            products, please notify us by sending an email to:
            betterlate@gmail.com. Please note that you must return products
            within 14 days of informing us.
          </p>
        </RootBlock>
        <RootSubTitle>Processing your returns</RootSubTitle>
        <RootBlock>
          <p>
            Once we have received your return shipment, we will proceed to
            evaluate the returned items and process your refund. The money will
            be refunded according to the original payment method you used during
            the purchase, unless otherwise requested. The amount will be
            refunded within 7 days. <br />
            <strong>
              Please not that the shipping costs for the return shipment are for
              your own account.
            </strong>
          </p>
        </RootBlock>
      </RootContainer>

      {/* <Subscribe /> */}
    </>
  )
}

export default Refunds

export const RootContainer = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 35rem;
  margin: auto;
  padding: 0 var(--px-2);
  padding-top: 90px;
  padding-bottom: var(--spacer-half);

  @media (min-width: 768px) {
    padding: 100px var(--px-2);
  }
`

export const RootTitle = styled.h2`
  margin-bottom: var(--spacer-half);
  text-align: center;
  font-family: var(--font-2);
  letter-spacing: var(--ls-md);
`

export const RootSubTitle = styled.h5`
  margin-bottom: var(--spacer-half);
  letter-spacing: var(--ls-sm);
  text-align: left;
  font-family: var(--font-2);
`

export const RootBlock = styled.section`
  margin-bottom: var(--spacer);

  p {
    line-height: 1.7;
  }

  strong {
    font-weight: 700;
    color: var(--black);
  }
`
