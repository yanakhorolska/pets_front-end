import { Fragment, useState } from 'react';
import { Popover } from '@mui/material';
import { PopoverAnchor, PopoverContainer } from "./WorkTimePopUpStyled"

export const WorkTimePopUp = ({ workDays }) => {
    const [anchorElement, setAnchorElement] = useState(null);

    const handlePopoverOpen = ({ currentTarget }) => {
        setAnchorElement(currentTarget);
    };
    
    const handlePopoverClose = () => {
    setAnchorElement(null);
    };

     const isPopupOpened = !!anchorElement;

    const currentDate = new Date();
  
   
    const indexToFind = currentDate.getDay() 
    const neededObj = workDays.find((obj, index) => index === indexToFind);

  

    return (
        <PopoverAnchor  aria-owns={isPopupOpened ? 'popover' : undefined}
      aria-haspopup="true"
      onMouseEnter={handlePopoverOpen}
      onMouseLeave={handlePopoverClose}>
            {workDays.length > 0 && <span key={neededObj._id}> {!neededObj.isOpen ? "CLOSED" : `${neededObj.from} - ${neededObj.to}`}</span>}
            <Popover
                id="popover"
                sx={{
          pointerEvents: 'none',
          backgroundColor: 'transparent',
        }}
          open={isPopupOpened}
          anchorEl={anchorElement}
          anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
                }}
          transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
                }}
                PaperProps={{
          sx: {
            backgroundColor: 'white',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderRadius: '8px',
            borderColor: '#F59256',
            boxShadow: 53,
                  
          },
                }}
                onClose={handlePopoverClose}
disableRestoreFocus
            >
                <PopoverContainer>
                    {workDays.map((workDay, index) => {
function getDayName(index) {
  switch (index) {
    case 0:
      return "MN";
    case 1:
      return "TU";
    case 2:
      return "WD";
    case 3:
      return "TH";
    case 4:
      return "FR";
    case 5:
      return "ST";
    case 6:
      return "SN";
    default:
      return "Invalid day";
  }
}

            return (
              <Fragment key={workDay._id}>
                <div>{getDayName(index)}</div>
                <div>
                  {workDay?.isOpen
                    ? `${workDay?.from} - ${workDay?.to}`
                    : 'CLOSED'}
                </div>
              </Fragment>
            );
          })}
            </PopoverContainer>
            </Popover> 
        </PopoverAnchor>      
)
    
}