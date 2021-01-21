import React, { useState, Component, useCallback, useReducer } from 'react';
import { godArray } from './arrays';
import './tierlist.css';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import produce from "immer";

//had to import: react-beautiful-dnd@npm:aligned-rbd --save. add flex-direction: row to CSS, and also change "direction" prop to 'grid'

const dragReducer = produce((draft, action) => {
    switch (action.type) {
      case "MOVE": {
        draft[action.from] = draft[action.from] || [];
        draft[action.to] = draft[action.to] || [];
        const [removed] = draft[action.from].splice(action.fromIndex, 1);
        draft[action.to].splice(action.toIndex, 0, removed);
      }
    }
  });

const Index = () => {
    const [state, dispatch] = useReducer(dragReducer, {
        gods: godArray,
    });
    
    
    const onDragEnd = useCallback((result) => {
        if (result.reason === "DROP") {
          if (!result.destination) {
            return;
          }
          dispatch({
            type: "MOVE",
            from: result.source.droppableId,
            to: result.destination.droppableId,
            fromIndex: result.source.index,
            toIndex: result.destination.index,
          });
        }
      }, []);


    return (
        <div className='WholeContainer'>
            <DragDropContext onDragEnd={onDragEnd}>
            <div className='Tier-Container'>
            {/*SS*/}
            <Droppable droppableId="gods2" type="GOD" direction='grid'>
                    {(provided) => {
                        return (
                            <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className='Tier-Row'> 
                            <div className='Tier'>
                            <div className='Tier-Label'><span className='Label'>SS</span></div>
                                {state.gods2?.map((god, index) => {
                                    return (
                                        <Draggable key={god.id} draggableId={god.id} index={index}>
                                            {(provided) => {
                                                return (
                                                    <div
                                                        className='DontKnowWhatThisIsYet'
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                    >
                                                        <div className='God'>
                                                            <span>
                                                                {god.name}
                                                            </span>
                                                        </div>
                                                    </div>
                                                );
                                            }}
                                        </Draggable>
                                    );
                                })}
                                {provided.placeholder}
                                </div>
                            </div>
                        );
                    }}
                </Droppable>
            {/*S*/}
            <Droppable droppableId="gods3" type="GOD" direction='grid'>
                    {(provided) => {
                        return (
                            <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className='Tier-Row'> 
                            <div className='Tier'>
                            <div className='Tier-Label'><span className='Label'>S</span></div>
                                {state.gods3?.map((god, index) => {
                                    return (
                                        <Draggable key={god.id} draggableId={god.id} index={index}>
                                            {(provided) => {
                                                return (
                                                    <div
                                                        className='DontKnowWhatThisIsYet'
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                    >
                                                        <div className='God'>
                                                            <span>
                                                                {god.name}
                                                            </span>
                                                        </div>
                                                    </div>
                                                );
                                            }}
                                        </Draggable>
                                    );
                                })}
                                {provided.placeholder}
                                </div>
                            </div>
                        );
                    }}
            </Droppable>
            {/*A*/}
            <Droppable droppableId="gods4" type="GOD" direction='grid'>
                    {(provided) => {
                        return (
                            <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className='Tier-Row'> 
                            <div className='Tier'>
                            <div className='Tier-Label'><span className='Label'>A</span></div>
                                {state.gods4?.map((god, index) => {
                                    return (
                                        <Draggable key={god.id} draggableId={god.id} index={index}>
                                            {(provided) => {
                                                return (
                                                    <div
                                                        className='DontKnowWhatThisIsYet'
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                    >
                                                        <div className='God'>
                                                            <span>
                                                                {god.name}
                                                            </span>
                                                        </div>
                                                    </div>
                                                );
                                            }}
                                        </Draggable>
                                    );
                                })}
                                {provided.placeholder}
                                </div>
                            </div>
                        );
                    }}
            </Droppable>
            {/*B*/}
            <Droppable droppableId="gods5" type="GOD" direction='grid'>
                    {(provided) => {
                        return (
                            <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className='Tier-Row'> 
                            <div className='Tier'>
                            <div className='Tier-Label'><span className='Label'>B</span></div>
                                {state.gods5?.map((god, index) => {
                                    return (
                                        <Draggable key={god.id} draggableId={god.id} index={index}>
                                            {(provided) => {
                                                return (
                                                    <div
                                                        className='DontKnowWhatThisIsYet'
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                    >
                                                        <div className='God'>
                                                            <span>
                                                                {god.name}
                                                            </span>
                                                        </div>
                                                    </div>
                                                );
                                            }}
                                        </Draggable>
                                    );
                                })}
                                {provided.placeholder}
                                </div>
                            </div>
                        );
                    }}
            </Droppable>
            {/*C*/}
            <Droppable droppableId="gods6" type="GOD" direction='grid'>
                    {(provided) => {
                        return (
                            <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className='Tier-Row'> 
                            <div className='Tier'>
                            <div className='Tier-Label'><span className='Label'>C</span></div>
                                {state.gods6?.map((god, index) => {
                                    return (
                                        <Draggable key={god.id} draggableId={god.id} index={index}>
                                            {(provided) => {
                                                return (
                                                    <div
                                                        className='DontKnowWhatThisIsYet'
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                    >
                                                        <div className='God'>
                                                            <span>
                                                                {god.name}
                                                            </span>
                                                        </div>
                                                    </div>
                                                );
                                            }}
                                        </Draggable>
                                    );
                                })}
                                {provided.placeholder}
                                </div>
                            </div>
                        );
                    }}
            </Droppable>
            {/*D*/}
            <Droppable droppableId="gods7" type="GOD" direction='grid'>
                    {(provided) => {
                        return (
                            <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className='Tier-Row'> 
                            <div className='Tier'>
                            <div className='Tier-Label'><span className='Label'>D</span></div>
                                {state.gods7?.map((god, index) => {
                                    return (
                                        <Draggable key={god.id} draggableId={god.id} index={index}>
                                            {(provided) => {
                                                return (
                                                    <div
                                                        className='DontKnowWhatThisIsYet'
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                    >
                                                        <div className='God'>
                                                            <span>
                                                                {god.name}
                                                            </span>
                                                        </div>
                                                    </div>
                                                );
                                            }}
                                        </Draggable>
                                    );
                                })}
                                {provided.placeholder}
                                </div>
                            </div>
                        );
                    }}
            </Droppable>
            </div>
            {/*God Pool*/}
            <Droppable droppableId="gods" type="GOD" direction='grid'>
                    {(provided) => {
                        return (
                            <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className='GodPool'
                            >
                                {state.gods?.map((god, index) => {
                                    return (
                                        <Draggable key={god.id} draggableId={god.id} index={index}>
                                            {(provided) => {
                                                return (
                                                    <div
                                                        className='DontKnowWhatThisIsYet'
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                    >
                                                        <div className='God'>
                                                            <span>
                                                                {god.name}
                                                            </span>
                                                        </div>
                                                    </div>
                                                );
                                            }}
                                        </Draggable>
                                    );
                                })}
                                {provided.placeholder}
                            </div>
                        );
                    }}
                </Droppable>
            </DragDropContext>
        </div>
    );
};




class Tierlist extends React.Component {
    render() {
        return (
            <div>
                <Index />
            </div>
        );
    }
}

export default Tierlist;




/*
const Tiers = () => {
    return (
        <div className='Tierlist-Wrapper'>
            <div className='Tier-Container'>
                <div className='Label'>
                    <span className='Tier-Label'>SS</span>
                </div>
            <div className='Tier-Row'></div>
            </div>
        </div>
    )
}




const GodsToDrag = () => {
    const [gods, updateGods] = useState(godArray);

    //We create a new copy of our characters array
//We use the source.index value to find our item from our new array and remove it using the splice method
//That result is destructured, so we end up with a new object of reorderedItem that is our dragged item
//We then use our destination.inddex to add that item back into the array, but at it’s new location, again using splice
//Finally, we update our gods state using the updateGods function 
    
function handleOnDragEnd(result) {
        if(!result.destination) return;
        const newGods = Array.from(gods);
        const [reorderedTiers] = newGods.splice(result.source.index, 1);
        newGods.splice(result.destination.index,0,reorderedTiers);
    
        updateGods(newGods);
    }

    // This returns the array, mapped by id and index and returns the name into drag/drop elements
    // there is an event handler above that handles post drag and drop, updating the index of the item that was re-oredered and add it to the new array 'items'

    return (
        <div>
        <DragDropContext onDragEnd={handleOnDragEnd}>
        
        <Droppable droppableId='gods' direction='grid'>
            {(provided) => (
                <div className='GodDisplay' {...provided.droppableProps} ref={provided.innerRef}>
                    {gods.map(({id, name}, index) => {
                        return (
                            <Draggable key={id} draggableId={id} index={index}>
                                {(provided) => (
                                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                        {name}
                                    </div>
                                )}
                            </Draggable>
                        );
                    })}
                    {provided.placeholder}
                    </div>
            )}
            </Droppable>
            </DragDropContext>
            </div>        
    );
}

*/