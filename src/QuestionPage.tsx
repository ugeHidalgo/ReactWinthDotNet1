/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {
  FieldContainer,
  FieldError,
  Fieldlabel,
  FieldSet,
  FieldTextArea,
  FormButtonContainer,
  gray3,
  gray6,
  PrimaryButton,
  SubmissionSuccess,
} from './Styles';
import { useParams } from 'react-router-dom';
import { Page } from './Page';
import { getQuestion, QuestionData, postAnswer } from './QuestionData';
import { AnswerList } from './AnswerList';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface IFormData {
  content: string;
}

export const QuestionPage = () => {
  //states
  const [question, setQuestion] = React.useState<QuestionData | null>(null);
  const [successfullySubmitted, setSuccessfullySubmitted] =
    React.useState(false);

  //React-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormData>({
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<IFormData> = async (data) => {
    console.log(`Submit on Question page with data: ${data}`);
    const result = await postAnswer({
      questionId: question!.questionId,
      content: data.content,
      userName: 'Fred',
      created: new Date(),
    });
    setSuccessfullySubmitted(result ? true : false);
  };

  //Page params
  const { questionId } = useParams();
  React.useEffect(() => {
    const doGetQuestion = async (questionId: number) => {
      const foundQuestion = await getQuestion(questionId);
      setQuestion(foundQuestion);
    };
    if (questionId) {
      doGetQuestion(Number(questionId));
    }
  }, [questionId]);

  return (
    <Page>
      <div
        css={css`
          background-color: white;
          padding: 15px 20px 20px 20px;
          border-radius: 4px;
          border: 1px solid ${gray6};
          box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
        `}
      >
        <div
          css={css`
            font-size: 19px;
            font-weight: bold;
            margin: 10px 0px 5px;
          `}
        >
          {question === null ? '' : question.title}
        </div>
        {question !== null && (
          <React.Fragment>
            <p
              css={css`
                margin-top: 0px;
                background-color: white;
              `}
            >
              {question.content}
            </p>
            <div
              css={css`
                font-size: 12px;
                font-style: italic;
                color: ${gray3};
              `}
            >
              {`Asked by ${question.userName} on 
              ${question.created.toLocaleDateString()} 
              ${question.created.toLocaleTimeString()}`}
            </div>
            <AnswerList data={question.answers} />
            <form
              onSubmit={handleSubmit(onSubmit)}
              css={css`
                margin-top: 20px;
              `}
            >
              <FieldSet disabled={isSubmitting || successfullySubmitted}>
                <FieldContainer>
                  <Fieldlabel htmlFor="content">Your Answer</Fieldlabel>
                  <FieldTextArea
                    {...register('content', { required: true, minLength: 50 })}
                    id="content"
                  />
                </FieldContainer>
                {errors.content?.type === 'required' && (
                  <FieldError>Campo obligatorio.</FieldError>
                )}
                {errors.content?.type === 'minLength' && (
                  <FieldError>Longitud mínima de 50 caracteres.</FieldError>
                )}
                <FormButtonContainer>
                  <PrimaryButton type="submit">
                    Submit Your Answer
                  </PrimaryButton>
                </FormButtonContainer>
                {successfullySubmitted && (
                  <SubmissionSuccess>
                    Question successfully submitted.
                  </SubmissionSuccess>
                )}
              </FieldSet>
            </form>
          </React.Fragment>
        )}
      </div>
    </Page>
  );
};
