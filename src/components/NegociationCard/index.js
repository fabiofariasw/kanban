import React, { forwardRef } from 'react'
import { Box, Typography, Paper } from '@mui/material';

const NegociationCard = forwardRef(
  (
    { status, name, product, date, licensePlate, index, value, ...rest },
    ref
  ) => {

  const getStatusColor = (status) => {
    switch (status) {
      case 'consigned':
        return '#2196f3';

      case 'canceled':
        return '#F64A14';

      case 'brokered':
        return '#60BED4';

      default:
        return '#2D2D2D';
    }
  };

  return (
    <Box
      mb="16px"
      borderRadius="8px"
      // border={`1px ${isDragging ? 'dashed' : 'solid'} #c9cdd0`}
      ref={ref}
      {...rest}
    >
      <Paper
        elevation={2}
        style={{
          borderRadius: '8px',
          // boxShadow: isDragging ? 'none' : ''

        }}
      >

    <Box
      borderRadius="8px"
      bgcolor="white"
      borderLeft="12px solid"
      borderColor={getStatusColor(status)}
      justifyContent="flex-start"
      alignItems="center"
      fontWeight="600"
      fontSize="1rem"
      style={{
        cursor: 'grab',
        // opacity: isDragging ? 0 : 1
      }}
      width={240}
      p="16px 12px 8px 12px"
    >
      <Typography
        variant="body1"
        mb="12px"
        >
        {name}
      </Typography>
      <Typography variant="body2" mb="12px">
        {product}
      </Typography>
      <Typography variant="body2" mb="12px">
        {licensePlate}
      </Typography>
      <Box flexDirection="row" display="flex" justifyContent="space-between">
        <Typography variant="body2" mb="12px">
          {date}
        </Typography>
        <Typography variant="body2" fontWeight="bold">
          {value}
        </Typography>
      </Box>
    </Box>
    </Paper>
    </Box>
  )
})

export default NegociationCard
