import React from 'react'
import PropTypes from 'prop-types'
import FoodIconCreator from '../../higherOrderComponents/foodIconCreator'

const SeafoodIcon = ({ color, rotate }) => (
  <g>
    <path
      fill="#ECECEC"
      d="M272,486.828v-23.536c0-10.336,4.992-20.032,13.4-26.04l29.2-20.856c8.408-6,13.4-15.704,13.4-26.032  V254.828h-32v112c0,8.84-7.16,16-16,16l0,0c-8.84,0-16-7.16-16-16v-112h-32v112c0,8.84-7.16,16-16,16l0,0c-8.84,0-16-7.16-16-16  v-112h-32v135.536c0,10.336,4.992,20.032,13.4,26.04l29.2,20.856c8.408,6,13.4,15.704,13.4,26.032v23.536H272z"
    />
    <rect x="224" y="462.828" fill="#B6C1CE" width="48" height="24" />
    <path
      fill="#EABD8C"
      d="M448,62.828l-40-56V62.86c0,21.024-4.896,41.752-14.296,60.552l0,0  c-15.752,31.512-47.952,51.416-83.184,51.416l0,0c-24.664,0-48.32-9.8-65.76-27.24l-18.248-18.248  C168.56,71.388,89.96,38.828,8,38.828l0,0v35.144c0,54.336,21.584,106.44,60,144.856l0,0c38.416,38.416,90.52,60,144.856,60h34.84  c64.96,0,125.424-33.192,160.304-88l0,0l0,0c49.632-29.776,80-83.416,80-141.296V6.828L448,62.828z"
    />
    <path
      fill="#D3A06C"
      d="M8,73.972c0,54.336,21.584,106.44,60,144.856c9.28,9.28,19.368,17.552,30.088,24.8  C147.264,231.812,184,187.54,184,134.828c0-17.016-3.984-33.368-11.056-48.184C123.952,55.7,66.864,38.828,8,38.828V73.972z"
    />
    <g>
      <path
        fill="#B27946"
        d="M488,49.532V6.828l-40,56l-40-56V62.86c0,21.024-4.896,41.752-14.296,60.552l0,0   c-4.968,9.944-11.584,18.72-19.416,26.096l1.712,1.32h32v40C457.632,161.052,488,107.412,488,49.532z"
      />
      <path
        fill="#B27946"
        d="M8,73.972c0,54.336,21.584,106.44,60,144.856c1.368,1.368,2.792,2.664,4.192,3.992   C120.704,222.716,160,183.364,160,134.828c0-30.896-15.92-58.08-40.016-73.776l-2.224-1.976C83.024,45.868,45.888,38.828,8,38.828   V73.972z"
      />
    </g>
    <polygon points="80,134.828 64,134.828 64,150.828 48,150.828 48,166.828 64,166.828 64,182.828 80,182.828 80,166.828 96,166.828   96,150.828 80,150.828 " />
    <rect
      x="177.358"
      y="198.837"
      transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 487.6533 211.6819)"
      width="45.256"
      height="16"
    />
    <rect
      x="217.363"
      y="206.826"
      transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 561.5947 197.032)"
      width="45.256"
      height="16"
    />
    <rect
      x="265.36"
      y="206.805"
      transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 643.5157 163.0577)"
      width="45.256"
      height="16"
    />
    <g className="outline" fill="rgb(53, 53, 53)">
      <path d="M298.344,108.484l11.312-11.312l-8-8C298.008,85.524,296,80.676,296,75.516V74.14c0-5.16,2.008-10.008,5.656-13.656  C308.328,53.82,312,44.956,312,35.516V34.14c0-9.44-3.672-18.304-10.344-24.968l-8-8l-11.312,11.312l8,8  C293.992,24.132,296,28.98,296,34.14v1.376c0,5.16-2.008,10.008-5.656,13.656C283.672,55.836,280,64.7,280,74.14v1.376  c0,9.44,3.672,18.304,10.344,24.968L298.344,108.484z" />
      <path d="M338.344,84.484l11.312-11.304l-3.76-3.768C344.672,68.18,344,66.564,344,64.828v-1.056c0-2.472,1.368-4.688,3.576-5.792  C355.24,54.156,360,46.452,360,37.884v-1.056c0-6.008-2.344-11.656-6.584-15.888l-3.76-3.76l-11.312,11.304l3.76,3.768  c1.224,1.224,1.896,2.84,1.896,4.576v1.056c0,2.472-1.368,4.688-3.576,5.792C332.76,47.5,328,55.204,328,63.772v1.056  c0,6.008,2.344,11.656,6.584,15.888L338.344,84.484z" />
      <path d="M242.344,84.484l11.312-11.304l-3.76-3.768C248.672,68.18,248,66.564,248,64.828v-1.056c0-2.472,1.368-4.688,3.576-5.792  C259.24,54.156,264,46.452,264,37.884v-1.056c0-6.008-2.344-11.656-6.584-15.888l-3.76-3.76l-11.312,11.304l3.76,3.768  c1.224,1.224,1.896,2.84,1.896,4.576v1.056c0,2.472-1.368,4.688-3.576,5.792C236.76,47.5,232,55.204,232,63.772v1.056  c0,6.008,2.344,11.656,6.584,15.888L242.344,84.484z" />
      <path d="M478.168,6.828L448,49.068l-30.168-42.24H400V62.86c0,19.68-4.648,39.384-13.456,56.976  c-14.48,28.992-43.616,46.992-76.024,46.992c-22.704,0-44.056-8.84-60.112-24.896l-18.248-18.256  C172.28,63.804,92.672,30.828,8,30.828H0V73.98c0,56.848,22.144,110.296,62.344,150.504c27.424,27.424,61.024,46.432,97.656,55.752  v110.128c0,12.888,6.256,25.056,16.752,32.552l29.2,20.856C212.24,448.26,216,455.564,216,463.3v15.528h-88v16h240v-16h-88V463.3  c0-7.736,3.76-15.032,10.048-19.528l29.2-20.856C329.744,415.42,336,403.252,336,390.356V266.092  c31.128-15.488,58.072-39.12,77.736-69.384C464.52,165.46,496,109.244,496,49.532V6.828H478.168z M320,390.356  c0,7.736-3.76,15.032-10.048,19.528l-29.2,20.856C270.256,438.236,264,450.404,264,463.3v15.528h-32V463.3  c0-12.888-6.256-25.056-16.752-32.552l-29.2-20.856c-6.288-4.496-10.048-11.8-10.048-19.536V283.604  c5.288,0.92,10.616,1.696,16,2.216v81.008c0,13.232,10.768,24,24,24s24-10.768,24-24v-80h7.696c2.784,0,5.544-0.144,8.304-0.256  v80.256c0,13.232,10.768,24,24,24s24-10.768,24-24v-88h-0.608c5.624-1.64,11.184-3.432,16.608-5.552V390.356z M208,286.708  c1.616,0.04,3.232,0.12,4.848,0.12H224v80c0,4.408-3.584,8-8,8s-8-3.592-8-8V286.708z M272,285.34c5.392-0.656,10.72-1.584,16-2.672  v84.16c0,4.408-3.584,8-8,8s-8-3.592-8-8V285.34z M247.696,270.828h-34.84c-44.624,0-86.936-14.792-121.456-41.976  c43.664-8.992,76.6-47.736,76.6-94.024c0-2.936-0.136-5.84-0.392-8.704l-15.936,1.416c0.208,2.4,0.328,4.832,0.328,7.288  c0,43.024-34.168,78.128-76.776,79.84c-0.52-0.504-1.056-0.984-1.568-1.496C36.48,175.988,16,126.556,16,73.98V46.94  c34.96,0.904,68.888,7.8,100.68,20.088c11.448,7.528,21.144,19.416,28.056,34.44l14.528-6.688c-1.672-3.632-3.528-7.08-5.48-10.4  c24.296,13.488,46.872,30.432,67.064,50.624l18.248,18.256c19.08,19.064,44.448,29.568,71.424,29.568  c24.6,0,47.576-8.76,65.48-24.04v0.04h24v29.544C366.256,240.02,309.512,270.828,247.696,270.828z M480,49.532  c0,49.856-24.232,96.96-64,126.264v-32.968h-25.008c3.704-4.912,7.04-10.176,9.872-15.832C410.768,107.196,416,85.02,416,62.86  V31.796l32,44.792l32-44.792V49.532z" />
    </g>
  </g>
)

SeafoodIcon.propTypes = {
  color: PropTypes.string,
  rotate: PropTypes.string,
  name: PropTypes.string,
}

SeafoodIcon.defaultProps = {
  color: 'black',
  rotate: '0',
}

export default FoodIconCreator(SeafoodIcon)
