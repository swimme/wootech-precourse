export const stationManagerViewHTML = `
  <label> 역 이름 <br>
    <input id = "station-name-input" placeholder = "역 이름을 입력해주세요."></input>
    <button id = "station-add-button"> 역 추가 </button>
  </label>

  <h2>🚉 지하철 역 목록</h4>
  <table id="station-table" border = "1">
    <thead>
      <th> 역 이름 </th>
      <th> 설정 </th>
    </thead>
    <tbody></tbody>
  </table>
`;

export const lineManagerViewHTML = `
  <label> 노선 이름 <br>
    <input id = "line-name-input" placeholder = "노선 이름을 입력해주세요."></input>
  </label><br><br>
  
  <label>상행 종점
    <select id = "line-start-station-selector"> 
    </select>
  </label><br>
  
  <label>하행 종점
    <select id = "line-end-station-selector"> 
    </select>
  </label><br><br>
  
  <button id = "line-add-button"> 노선 추가 </button>
  

  <h2>🚉 지하철 노선 목록</h4>
  <table id="line-table" border = "1">
    <thead>
      <th> 노선 이름 </th>
      <th> 상행 종점역 </th>
      <th> 하행 종점역 </th>
      <th> 설정 </th>
    </thead>
    <tbody></tbody>
  </table>
`;

export const createStationTableRowHTML = (stationName) => {
  const sectionRowHTML = `
      <tr data-station = ${stationName}>
        <td> ${stationName} </td>
        <td> <button class = "station-delete-button"> 삭제 </button> </td>
      </tr>
    `;
  return sectionRowHTML;
};

export const createLineTableRowHTML = (lineName, startStationName, endStationName) => {
  const sectionRowHTML = `
      <tr data-station = ${lineName}>
        <td> ${lineName} </td>
        <td> ${startStationName} </td>
        <td> ${endStationName} </td>
        <td> <button class = "line-delete-button"> 삭제 </button> </td>
      </tr>
    `;
  return sectionRowHTML;
};

export const insertStationOptionHTML = (targetSelectBox, stationName) => {
  const stationOptionElement = document.createElement("option");
  stationOptionElement.setAttribute("value", stationName);
  stationOptionElement.innerText = stationName;

  targetSelectBox.appendChild(stationOptionElement);
};
