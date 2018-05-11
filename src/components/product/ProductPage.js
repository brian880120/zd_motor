import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Checkbox, Menu, Icon } from 'semantic-ui-react';

import ProductRow from './ProductRow';
import './ProductPage.css';

class ProductPage extends Component {
    constructor() {
        super();
        this.onChange = this.onChange.bind(this);
    }

    onChange(event, target) {
        console.log(target.value);
    }

    onClick(event, target) {
        console.log(target.value);
    }

    onMouseDown() {

    }

    render() {
        const products = this.props.products;
        return (
            <div className="product-page">
                <div className="filter-section">
                    <div>
                        <Checkbox label='Induction Motor'
                            value='Induction Gear Motor'
                            onClick={this.onClick} />
                    </div>
                    <div>
                        <Checkbox label='Reversible Motor' />
                    </div>
                    <div>
                        <Checkbox label='Speed Control Motor' />
                    </div>
                    <div>
                        <Checkbox label='Brake Motor' />
                    </div>
                    <div>
                        <Checkbox label='Single Phase' />
                    </div>
                    <div>
                        <Checkbox label='Three Phase' />
                    </div>
                    <div>
                        <Checkbox label='Drum Motor' />
                    </div>
                    <div>
                        <Checkbox label='Hypoid Gear Motor' />
                    </div>
                </div>
                <div className="table-section">
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Model No.</Table.HeaderCell>
                                <Table.HeaderCell>Frame Size</Table.HeaderCell>
                                <Table.HeaderCell>Output Power</Table.HeaderCell>
                                <Table.HeaderCell>Rating</Table.HeaderCell>
                                <Table.HeaderCell>Voltage</Table.HeaderCell>
                                <Table.HeaderCell>Gear Ratio</Table.HeaderCell>
                                <Table.HeaderCell>Rated Speed</Table.HeaderCell>
                                <Table.HeaderCell>Rated Torque</Table.HeaderCell>
                                <Table.HeaderCell>Output Shaft</Table.HeaderCell>
                                <Table.HeaderCell>Price</Table.HeaderCell>
                                <Table.HeaderCell>Qty Price</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {products.map(product =>
                                <ProductRow key={product.id}
                                    product={product} />
                            )}
                        </Table.Body>
                        <Table.Footer>
                            <Table.Row>
                                <Table.HeaderCell colSpan='12'>
                                    <Menu floated='right' pagination>
                                        <Menu.Item as='a' icon>
                                            <Icon name='chevron left' />
                                        </Menu.Item>
                                        <Menu.Item as='a'>1</Menu.Item>
                                        <Menu.Item as='a'>2</Menu.Item>
                                        <Menu.Item as='a'>3</Menu.Item>
                                        <Menu.Item as='a'>4</Menu.Item>
                                        <Menu.Item as='a' icon>
                                            <Icon name='chevron right' />
                                        </Menu.Item>
                                    </Menu>
                                </Table.HeaderCell>
                            </Table.Row>
                        </Table.Footer>
                    </Table>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        products: state.products
    };
}

export default connect(mapStateToProps)(ProductPage);
