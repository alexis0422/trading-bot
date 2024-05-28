import React from "react"
import './table.css'

const TableComponent = ({data}) => {
    return(
        <div className="tablecompent">
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Uni Sell</th>
                        <th>Sushi Sell</th>
                        <th>Defi Sell</th>
                        <th>Uni buy</th>
                        <th>Sushi buy</th>
                        <th>Defi buy</th>
                        <th>Profit Rate</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>120</td>
                        <td>121</td>
                        <td>122</td>
                        <td>129</td>
                        <td>128</td>
                        <td>131</td>
                        <td>0.2</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TableComponent;