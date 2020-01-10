/*
 * Copyright (C) 2015  Ohm Patel
 *               2016  Sean Burke
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along
 * with this program; if not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */

import * as bootstrap from 'react-bootstrap';

import {differenceBy as _differenceBy, kebabCase as _kebabCase, startCase as _startCase} from 'lodash';

import CallToAction from './call-to-action';
import PropTypes from 'prop-types';
import React from 'react';
import {genEntityIconHTMLElement, getEntityLabel} from '../../../helpers/entity';
import * as utilsHelper from "../../../helpers/utils";


const {PageHeader, Table, Pager, Button, ButtonGroup, DropdownButton, MenuItem} = bootstrap;
const {formatDate} = utilsHelper;


/**
 * Renders the document and displays the 'SearchResults' page.
 * @returns {ReactElement} a HTML document which displays the SearchResults.
 * @param {object} props - Properties passed to the component.
 */

function RevisionsTable(props) {
	const {results} = props;
	let tableCssClasses = 'table table-striped';

	return (

		<div>
			<div>
				<h1 style={{color: '#754e37'}} >Recent Activites</h1>
			</div>
			<hr className="thin"/>
			<Table
				responsive
				className={tableCssClasses}
			>
				<thead>
				<tr>
					<th className="col-sm-2">Revision ID</th>
					<th className="col-sm-6">Entity Type</th>
					<th className="col-sm-4">Date</th>
				</tr>
				</thead>
				<tbody>
				{
					results.map((entity, i) => (
						<tr key={i}>
							<td>{entity.revisionId}</td>
							<td>
								<a style={{color: '#4e7ec2'}} href={`/revision/${entity.revisionId}`} >
									{genEntityIconHTMLElement(entity.type)}
									{getEntityLabel(entity)}
								</a>
							</td>
							<td>{formatDate(new Date(entity.createdAt))}</td>
						</tr>
					))
				}
				</tbody>
			</Table>
		</div>

	);
}

RevisionsTable.propTypes = {
	results: PropTypes.array.isRequired
};

RevisionsTable.displayName = 'RevisionsTable';

RevisionsTable.defaultProps = {
	results: null
};

export default RevisionsTable;
