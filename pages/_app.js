/** @format */

import '../styles/globals.css';
import styled from '@emotion/styled';

const ContainerWrapper = styled.div`
	max-width: 1600px;
	margin: 0 auto;
	padding: 0px;
`;

function MyApp({ Component, pageProps }) {
	return (
		<ContainerWrapper>
			<Component {...pageProps} />
		</ContainerWrapper>
	);
}

export default MyApp;
