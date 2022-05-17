import React from 'react';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const EditReview = (props) => {

    const {onSubmitProp, 
            cargo, 
            experiencia, 
            comentario, 
            lobueno, 
            lomalo,
            sueldo,
            entregamateriales,
            ambientedetrabajo,
            liderazgo,
            respetoalosfuncionarios,
            promedio} = props;

    return (
        <div >
          <Formik
          initialValues={{
          cargo : cargo,
          experiencia: experiencia,
          comentario:comentario,
          lobueno:lobueno,
          lomalo: lomalo,
          sueldo: sueldo,
          entregamateriales: entregamateriales,
          ambientedetrabajo: ambientedetrabajo,
          liderazgo: liderazgo,
          respetoalosfuncionarios: respetoalosfuncionarios,
         
        }}
        validationSchema={Yup.object().shape({
            cargo: Yup.string()
            .min(3, "El cargo requiere minimo 3 caracteres")
            .required ("Por favor ingresa su cargo"),
            
            experiencia: Yup.number()
            .min (0)
            .required ("la experiencia es obligatoria"),
            
            comentario: Yup.string()
            .min (10, "El comentario es muy corto")
            .max (500, "El comentario debe tener un maximo de 500 caracteres")
            .required ("Debe ingresar un comentario"),

            lobueno: Yup.string()
            .min (10, "El minimo de caracteres son 50")
            .max (500, "El maximo de caracteres son 500")
            .required ("Debe ingresar lo bueno del establecimiento"),

            lomalo: Yup.string()
            .min (10, "El minimo de caracteres son 50")
            .max (500, "El maximo de caracteres son 500")
            .required ("Debe ingresar lo malo del establecimiento"),

            sueldo: Yup.number()
            .min (0)
            .max (5)
            .required ("la clasificacion es obligatoria"),

            entregamateriales: Yup.number()
            .min (0)
            .max (5)
            .required ("la clasificacion es obligatoria"),

            ambientedetrabajo: Yup.number()
            .min (0)
            .max (5)
            .required ("la clasificacion es obligatoria"),

            liderazgo: Yup.number()
            .min (0)
            .max (5)
            .required ("la clasificacion es obligatoria"),

            respetoalosfuncionarios: Yup.number()
            .min (0)
            .max (5)
            .required ("la clasificacion es obligatoria"),


        })}

        onSubmit={(values, { resetForm }) => {
            console.log(values);
            onSubmitProp(values);
            resetForm();
        }}
        >
            {({
                values,
                errors,
                touched,
                handleSubmit,
                valid,
            }) =>{
        return (
            <div>
                <Form method= "post" onSubmit={handleSubmit}>
                    <label htmlFor="cargo">Cargo</label>
                    <Field id='cargo'type="text"  name='cargo'/>
                    {errors.cargo && touched.cargo && <p>{errors.cargo}</p>}
                    <br></br>
                    <label htmlFor="experiencia">Años que lleva o estuvo en el establecimiento</label>
                    <Field  id='experiencia' type="text"  name='experiencia'/>
                    {errors.experiencia && touched.experiencia && <p>{errors.experiencia}</p>}
                    <br></br>
                    <label htmlFor="comentario">Comentario</label>
                    <Field  id='comentario' type="text"  name='comentario'/>
                    {errors.comentario && touched.comentario && <p>{errors.comentario}</p>}
                    <br></br>
                    <label htmlFor="lobueno">Lo bueno</label>
                    <Field  id='lobueno' type="text" name='lobueno'/>
                    {errors.lobueno && touched.lobueno && <p>{errors.lobueno}</p>}
                    <br></br>
                    <label htmlFor="lomalo">Lo malo</label>
                    <Field  id='lomalo' type="text" name='lomalo'/>
                    {errors.lomalo && touched.lomalo && <p>{errors.lomalo}</p>}
                    <br></br>
                    <label htmlFor="Sueldo">Sueldo</label>
                    <Field  id='sueldo' type="number" max="5" min="0" step="0.1" name='sueldo'/>
                    {errors.sueldo && touched.sueldo && <p>{errors.sueldo}</p>}
                    <br></br>
                    <label htmlFor="Entrega de materiales">Entrega de materiales</label>
                    <Field  id='entregamateriales' type="number" max="5" min="0" step="0.1" name='entregamateriales'/>
                    {errors.entregamateriales && touched.entregamateriales && <p>{errors.entregamateriales}</p>}
                    <br></br>
                    <label htmlFor="Ambiente de trabajo">Ambiente de trabajo</label>
                    <Field  id='ambientedetrabajo' type="number" max="5" min="0" step="0.1" name='ambientedetrabajo'/>
                    {errors.ambientedetrabajo && touched.ambientedetrabajo && <p>{errors.ambientedetrabajo}</p>}
                    <br></br>
                    <label htmlFor="Liderazgo">Liderazgo</label>
                    <Field  id='liderazgo' type="number" max="5" min="0" step="0.1" name='liderazgo'/>
                    {errors.liderazgo && touched.liderazgo && <p>{errors.liderazgo}</p>}
                    <br></br>
                    <label htmlFor="Respeto al los funcionarios">Respeto al los funcionarios</label>
                    <Field  id='respetoalosfuncionarios' type="number" max="5" min="0" step="0.1" name='respetoalosfuncionarios'/>
                    {errors.respetoalosfuncionarios && touched.respetoalosfuncionarios && <p>{errors.respetoalosfuncionarios}</p>}
                    <br></br>
 
                    <button type="submit" disabled={Object.values(errors).length > 0}>Editar Evaluación</button>
                
                
                </Form>

                

                </div>
                
        );
        }}
        </Formik>
        </div>
      );
}

export default EditReview;
