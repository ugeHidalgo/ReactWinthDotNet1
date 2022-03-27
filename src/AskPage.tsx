import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Page } from './Page';
import { postQuestions } from './QuestionData';
import {
  FieldContainer,
  FieldError,
  FieldInput,
  Fieldlabel,
  FieldSet,
  FieldTextArea,
  FormButtonContainer,
  PrimaryButton,
  SubmissionSuccess,
} from './Styles';

//For React-hook-form use
interface IFormData {
  title: string;
  content: string;
}

export const AskPage = () => {
  //States
  const [successfullySubmitted, setSuccessfullySubmitted] =
    React.useState(false);

  //React-hook-form
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<IFormData>({
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<IFormData> = async (data) => {
    console.log(`onSubmit askPage-received data: ${data}`);
    const result = await postQuestions({
      title: data.title,
      content: data.content,
      userName: 'Fred',
      created: new Date(),
    });
    setSuccessfullySubmitted(result ? true : false);
  };

  return (
    <Page title="Ask a question">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldSet disabled={isSubmitting || successfullySubmitted}>
          <FieldContainer>
            <Fieldlabel htmlFor="title">Title</Fieldlabel>
            <FieldInput
              {...register('title', { required: true, minLength: 10 })}
              id="title"
            />
            {errors.title?.type === 'required' && (
              <FieldError>Campo obligatorio.</FieldError>
            )}
            {errors.title?.type === 'minLength' && (
              <FieldError>Longitud mínima de 50 caracteres.</FieldError>
            )}
          </FieldContainer>

          <FieldContainer>
            <Fieldlabel htmlFor="content">Content</Fieldlabel>
            <FieldTextArea
              {...register('content', { required: true })}
              id="content"
            />
            {errors.content?.type === 'required' && (
              <FieldError>Campo obligatorio.</FieldError>
            )}
          </FieldContainer>
          <FormButtonContainer>
            <PrimaryButton type="submit">Submit your question</PrimaryButton>
          </FormButtonContainer>
          {successfullySubmitted && (
            <SubmissionSuccess>
              Your question was successfully submitted.
            </SubmissionSuccess>
          )}
        </FieldSet>
      </form>
    </Page>
  );
};

//To be loaded with lazy loading
export default AskPage;
