import { useEffect, useState } from 'react';
import { errorColor, secondaryColor, warningColor } from '../../../../consts';
import { Errors } from '../../form.styled';
import { MeterContainer, Step, Steps } from './passwordStrengthMeter.style';

const PasswordStrengthMeter = ({ errors, children }) => {
	const [initialized, setInitialized] = useState(false);
	const [meter, setMeter] = useState({
		step1: false,
		step2: false,
		step3: false,
		step4: false,
		color: null,
	});

	useEffect(() => {
		if (
			(errors &&
				errors === 'Senha precisa conter pelo menos uma letra maiuscula') ||
			errors === 'Senha precisa conter pelo menos uma letra minuscula'
		) {
			setMeter({
				step1: true,
				step2: false,
				step3: false,
				step4: false,
				color: errorColor,
			});
			setInitialized(true);
		}
		if (errors && errors === 'Senha precisa conter pelo menos um número') {
			setMeter({
				step1: true,
				step2: true,
				step3: false,
				step4: false,
				color: warningColor,
			});
		}
		if (
			(errors &&
				errors === 'Senha precisa conter pelo menos um caractere especial') ||
			errors === 'Senha precisa conter pelo menos oito caracteres'
		) {
			setMeter({
				step1: true,
				step2: true,
				step3: true,
				step4: false,
				color: warningColor,
			});
		}

		if (!errors && initialized) {
			setMeter({
				step1: true,
				step2: true,
				step3: true,
				step4: true,
				color: secondaryColor,
			});
		}
		console.log('obj', meter);
	}, [errors]);

	return (
		<MeterContainer>
			<Steps>
				<Step step1={meter.step1} color={meter.color} />
				<Step step2={meter.step2} color={meter.color} />
				<Step step3={meter.step3} color={meter.color} />
				<Step step4={meter.step4} color={meter.color} />
			</Steps>
			{children}
			<Errors>{errors}</Errors>
		</MeterContainer>
	);
};
export default PasswordStrengthMeter;
