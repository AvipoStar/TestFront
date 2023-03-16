import Stars from "../stars-item/stars-item";

function TableStars()
{
    return (
        <div align="center" >
            <h2>Просим Вас оценить каждое из приведенных ниже утверждений, отметив одну из следующих цифр, означающих:</h2>
            <table align="center" width="100%">
                <tr>
                    <th>
                        <div><Stars />
                            <h4>Совершенно не согласен</h4>
                        </div>
                    </th>
                    <th>
                        <div><Stars /><Stars />
                            <h4>Не совсем согласен</h4>
                        </div>
                    </th>
                    <th>
                        <div><Stars /><Stars /><Stars />
                            <h4>Затрудняюсь ответить</h4>
                        </div>
                    </th>
                    <th>
                        <div><Stars /><Stars /><Stars /><Stars />
                            <h4>Согласен, но есть замечания</h4>
                        </div>
                    </th>
                    <th>
                        <div>
                        <Stars /><Stars /><Stars /><Stars /><Stars />
                            <h4>Да, полностью согласен</h4>
                        </div>
                    </th>
                </tr> 
            </table>
        </div>
    );
}
export default TableStars;