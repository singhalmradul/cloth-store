import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
	width: 100%;
	display: flex;
	min-height: 100px;
	border-bottom: 1px solid darkgrey;
	padding: 15px 0;
	font-size: 20px;
	align-items: center;
`;
export const Image = styled.div`
	width: 23%;
	padding-right: 15px;

	img {
		width: 100%;
		height: 100%;
	}
`;
export const Name = styled.span`
	width: 23%;
`;
export const Quantity = styled.span`
	width: 23%;
	display: flex;
`;
export const Price = styled.span`
	width: 23%;
`;
export const ChangeQuantity = styled.span`
	cursor: pointer;
	-webkit-user-select: none; /* Safari */
	-moz-user-select: none; /* Firefox */
	-ms-user-select: none; /* IE10+/Edge */
	user-select: none; /* Standard */
`;
export const Value = styled.span`
	margin: 0 10px;
`;
export const Total = styled.span`
	padding-left: 12px;
	cursor: pointer;
`;
