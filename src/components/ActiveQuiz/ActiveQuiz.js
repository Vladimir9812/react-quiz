import React from "react";
import classes from "./ActiveQuiz.module.css";
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = props => (
	<div className={classes.ActiveQuiz}>
		<p className={classes.Question}>
			<span>
				<strong>{props.answerNumber}.</strong>&nbsp;
				{props.question}
			</span>

			<small>{props.answerNumber} из {props.quizLength}</small>
		</p>

	<AnswersList
		answers={props.answers}
		state={props.state}
		onAnswerClick={props.onAnswerClick}
	/>
	</div>
)

export default ActiveQuiz;