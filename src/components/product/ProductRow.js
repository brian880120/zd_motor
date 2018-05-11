import React from 'react';
import { Table } from 'semantic-ui-react';

const ProductRow = ({product}) => {
    const productVoltage = product.voltage.indexOf(';') === -1 ? (
        <div>{product.voltage}</div>
    ) : (
        <div>
            <div>{product.voltage.split(';')[0]}</div>
            <div>{product.voltage.split(';')[1]}</div>
        </div>
    );

    return (
        <Table.Row>
            <Table.Cell>
                {product.modelNo}
            </Table.Cell>
            <Table.Cell>
                {product.frameSize}
            </Table.Cell>
            <Table.Cell>
                {product.outputPower}
            </Table.Cell>
            <Table.Cell>
                {product.rating}
            </Table.Cell>
            <Table.Cell>
                {productVoltage}
            </Table.Cell>
            <Table.Cell>
                {product.gearRatio}
            </Table.Cell>
            <Table.Cell>
                {product.ratedSpeed}
            </Table.Cell>
            <Table.Cell>
                {product.ratedTorque}
            </Table.Cell>
            <Table.Cell>
                {product.outputShaft}
            </Table.Cell>
            <Table.Cell>
                {product.price}
            </Table.Cell>
            <Table.Cell>
                {product.qtyPrice}
            </Table.Cell>
        </Table.Row>
    );
}

export default ProductRow;
