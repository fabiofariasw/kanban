import React, { forwardRef } from "react";
import { Box, Typography } from "@mui/material";

const NegociationColumn = forwardRef(
  ({ title, children, ...rest }, ref) => {
   const negociationTitleFormatter = (title) => {
    switch (title) {
      case "prospection":
        return "Prospecção";

      case "negociation":
        return "Negociação";

      case "order":
        return "Pedido de compra";

      case "billing":
        return "Faturamento";

      case "legalization":
        return "Legalização";

      case "delivery":
        return "Entrega";

      case "comission":
        return "Comissão";

      default:
        return "Dados";
    }
  };


    return (
      <Box
        // key={Math.random()}
        // key={index}
        // style={{ transform: 'rotateX(180deg)' }}
        display="flex"
        flexDirection="column"
        mr="8px"
        ref={ref}
        {...rest}
      >
        <Typography
          bgcolor="white"
          display="flex"
          justifyContent="center"
          alignItems="center"
          fontSize="16px"
          minHeight="50px"
          mb="8px"
          borderRadius="8px"
          border="1px solid #c9cdd0"
        >
          {negociationTitleFormatter(title)}
        </Typography>

        {children}
      </Box>
    );
})

export default NegociationColumn
