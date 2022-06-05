export default () => {
  return [
    {
      id: '1',
      data: {
        label:
          <div>
            <div style={{ fontSize: '2em' }} >
              Contact us...
            </div>
            <br></br>
            <div style={{ fontSize: '1em' }}>
              Fill out the form below or contact us at jane@jlhlanguages.org stating the postcode of your school and the approximate number of students taking part
            </div>
          </div>
      },
      position: { x: 0, y: 0 },
      selectable: false,
      sourcePosition: 'bottom',
      targetPosition: 'bottom',
      style: { width: 300 },
    },
    {
      id: '2',
      data: {
        label:
          <div>
            <div style={{ fontSize: '2em' }} >
              We reply...
            </div>
            <br></br>
            <div style={{ fontSize: '1em' }}>
              We will get back to you with a quotation
            </div>
          </div>
      },
      position: { x: 0, y: 200 },
      selectable: false,
      sourcePosition: 'bottom',
      targetPosition: 'top',
      style: { width: 300 },
    },
    {
      id: '3',
      data: {
        label:
          <div>
            <div style={{ fontSize: '2em' }} >
              Agree the details...
            </div>
            <br></br>
            <div style={{ fontSize: '1em' }}>
              Date, dietary requirements etc.
            </div>
          </div>
      },
      position: { x: 0, y: 350 },
      selectable: false,
      sourcePosition: 'bottom',
      targetPosition: 'top',
      style: { width: 300 },
    },
    {
      id: '4',
      data: {
        label:
          <div>
            <div style={{ fontSize: '2em' }} >
              Done!
            </div>
            <br></br>
            <div style={{ fontSize: '1em' }}>
              We will email you a confirmation, risk assesments and any other relevant documentation
            </div>
          </div>
      },
      position: { x: 0, y: 500 },
      selectable: false,
      sourcePosition: 'top',
      targetPosition: 'top',
      style: { width: 300 },
    },
    {
      id: '5',
      data: {
        label:
          <div>
            <div style={{ fontSize: '2em' }} >
              On the day<br />(Mobile Restaurant - French only)
            </div>
            <br></br>
            <div style={{ fontSize: '1em' }}>
              You make a venue available to us with tables and chairs. We arrive 45 mins prior to the start time and take care of the rest.
            </div>
          </div>
      },
      position: { x: 0, y: 700 },
      selectable: false,
      sourcePosition: 'left',
      targetPosition: 'left',
      style: { width: 300, background: '#e6f2ff' },
    },
    {
      id: '6',
      data: {
        label:
          <div>
            <div style={{ fontSize: '2em' }} >
              On the day<br />(At Our Restaurant)
            </div>
            <br></br>
            <div style={{ fontSize: '1em' }}>
              You arrive at our venue at the arranged time and we take care of the rest.
            </div>
          </div>
      },
      position: { x: 0, y: 950 },
      selectable: false,
      sourcePosition: 'left',
      targetPosition: 'left',
      style: { width: 300, background: '#e6f2ff' },
    },
    {
      id: 'e1-2',
      source: '1',
      target: '2',
      animated: false,
      selectable: false,
      type: 'straight',
      arrowHeadType: 'arrowclosed',
    },
    {
      id: 'e2-3',
      source: '2',
      target: '3',
      animated: false,
      selectable: false,
      type: 'straight',
      arrowHeadType: 'arrowclosed',
    },
    {
      id: 'e3-4',
      source: '3',
      target: '4',
      animated: false,
      selectable: false,
      type: 'straight',
      arrowHeadType: 'arrowclosed',
    },
  ];
}

