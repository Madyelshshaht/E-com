import { LottieHandler } from "@components/feedback";
import { ReactNode } from "react";
import { Col, Row } from "react-bootstrap";

type GridListProps<T> = {
    records : T[];
    renderItem : (record : T) => ReactNode;
    emptyMessage: string ;
}

type HasId = { id?:number };

const GridList  = <T extends HasId> ({records , renderItem , emptyMessage} : GridListProps<T> ) => {
    const categoriesList =
    records.length > 0
        ? records.map((record) => {
            return (
                <Col
                    lg={3}
                    md={4}
                    xs={6}
                    key={record.id}
                    className="d-flex justify-content-center mb-5 mt-2"
                >
                    {renderItem(record)}
                </Col>
            );
        })
            : <LottieHandler type="Empty" message={emptyMessage} style={{width: "400px"}}/>;
    return (
        <Row>
            {categoriesList}
        </Row>
    )
}

export default GridList;
// this is To Not Repeat For loopion return data  in Cateories and Products to Enhance Performance of your Website
