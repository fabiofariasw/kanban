import { Box } from '@mui/material';
import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import Negociationcard from '../NegociationCard';
import NegociationColumn from '../NegociationColumn';

export const Negociation = ({negociationData}) => {
  return (
    <Box
      display="flex"
      width="100%"
      overflow="auto"
      maxWidth="90vw"
      // style={{ transform: 'rotateX(180deg)' }}
    >
      {negociationData.map((column) => {
        return (
          <Droppable key={column.id} droppableId={column.id}>
            {(provided) => (
              <NegociationColumn
                title={column.name}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {column.cards.map((card, index) => {
                  return (
                    <Draggable
                      key={card.id}
                      draggableId={card.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <Negociationcard
                          status={card.status}
                          name={card?.name}
                          product={card?.product}
                          date={card?.date}
                          licensePlate={
                            card?.license ? card.license : 'Sem placa'
                          }
                          index={index}
                          value={card?.value}
                          style={{
                            ...provided.draggableProps.style,
                            opacity: snapshot.isDragging ? '0.5' : '1'
                          }}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        />

                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </NegociationColumn>
            )}
          </Droppable>
        );
      })}
    </Box>
  )
}
