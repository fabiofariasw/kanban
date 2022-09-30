import { useState } from "react";
import { Box } from "@mui/material";
import Negociationcard from "../NegociationCard";
import { board } from "../../constants/mock";
import NegociationColumn from "../NegociationColumn";
import { DragDropContext } from "react-beautiful-dnd";
import { Negociation } from "../Negociation";

function Kanban() {
  const [negociationData, setNegociationData] = useState(board);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;

    const sourceColIndex = negociationData.findIndex(
      (e) => e.id === source.droppableId
    );
    const destinationColIndex = negociationData.findIndex(
      (e) => e.id === destination.droppableId
    );

    const sourceCol = negociationData[sourceColIndex];
    const destinationCol = negociationData[destinationColIndex];

    const sourceTask = [...sourceCol.cards];
    const destinationTask = [...destinationCol.cards];

    if (source.droppableId !== destination.droppableId) {
      const [removed] = sourceTask.splice(source.index, 1);
      destinationTask.splice(destination.index, 0, removed);

      negociationData[sourceColIndex].cards = sourceTask;
      negociationData[destinationColIndex].cards = destinationTask;

      setNegociationData(negociationData);
    } else {
      const [removed] = destinationTask.splice(source.index, 1);
      destinationTask.splice(destination.index, 0, removed);

      negociationData[sourceColIndex].cards = sourceTask;
      negociationData[destinationColIndex].cards = destinationTask;

      setNegociationData(negociationData);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Negociation negociationData={negociationData} />
    </DragDropContext>

    // <Box
    //   display="flex"
    //   width="100%"
    //   overflow="auto"
    //   maxWidth="90vw"
    //   style={{ transform: "rotateX(180deg)" }}
    // >
    //   {Object.keys(lists).map((columnName, indexList) => {
    //     return (
    //       <NegociationColumn>
    //         {lists[columnName].map((item, index) => {
    //           return (
    //             <Negociationcard
    //               key={item.id}
    //               status={item.status}
    //               name={item.name}
    //               licensePlate={item.license ? item.license : "Sem placa"}
    //               product={item.product}
    //               date={item.date}
    //               index={index}
    //               indexList={columnName}
    //               value={item.value}
    //             />
    //           );
    //         })}
    //       </NegociationColumn>
    //     );
    //   })}
    // </Box>
  );
}

export default Kanban;
