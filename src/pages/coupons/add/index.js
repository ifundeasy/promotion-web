import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Alert, Button } from 'antd'
import FixTabPanel from '@stateless/FixTabPanel'
import { useProTabContext } from '@hooks/proTabsContext'

const AddCoupons = () => {
  const { activeKey, removeTab } = useProTabContext()
  const navigate = useNavigate()
  const closeActiveOpenAngular = () => {
    removeTab(activeKey, () => {
      navigate('coupons/edit', { replace: true })
    })
  }
  return (
    <FixTabPanel>
      <Button type="link" onClick={closeActiveOpenAngular}>
        Close the current tab and open the Angular tab
      </Button>
      <Alert
        message="Success Tips"
        description="Detailed description and advice about successful copywriting."
        type="success"
        showIcon
      />
    </FixTabPanel>
  )
}

export default AddCoupons
