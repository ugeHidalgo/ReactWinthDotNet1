import { SubmitHandler, useForm } from 'react-hook-form';
import { Page } from './Page';
import {
  FieldContainer,
  FieldError,
  FieldInput,
  Fieldlabel,
  FieldSet,
  FieldTextArea,
  FormButtonContainer,
  PrimaryButton,
} from './Styles';

//For React-hook-form use
interface IFormData {
  title: string;
  content: string;
}

export const AskPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormData>({
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    console.log(data);
    console.log(errors);
  };

  return (
    <Page title="Ask a question">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldSet>
          <FieldContainer>
            <Fieldlabel htmlFor="title">Title</Fieldlabel>
            <FieldInput
              {...register('title', { required: true, minLength: 10 })}
              id="title"
            />
            {errors.title?.type === 'required' && (
              <FieldError>El título es necesario</FieldError>
            )}
            {errors.title?.type === 'minLength' && (
              <FieldError>
                La longitud mínima del título debe ser 10 caracteres.
              </FieldError>
            )}
          </FieldContainer>

          <FieldContainer>
            <Fieldlabel htmlFor="content">Content</Fieldlabel>
            <FieldTextArea
              {...register('content', { required: true })}
              id="content"
            />
            {errors.content?.type === 'required' && (
              <FieldError>A content is required</FieldError>
            )}
          </FieldContainer>
          <FormButtonContainer>
            <PrimaryButton type="submit">Submit your question</PrimaryButton>
          </FormButtonContainer>
        </FieldSet>
      </form>
    </Page>
  );
};

//To be loaded with lazy loading
export default AskPage;
