import clsx from 'clsx';
// import EditIconSrc from '../../components/assets/file-edit.png';
// import DeleteIconSrc from '../../components/assets/delete-icon.png';
import Button from '../Button/Button';
// import { Icon } from '../Icon';
import './styles.css';

const ListItem = ({ title, done, editAction, deleteAction, itemAction }) => {
    return (
        <li
            className={clsx('list-item', {
            'list-item-done': done,
        })}
            onClick={itemAction}
        >
            {title}
            <div onClick={(e) => {
                e.stopPropagation()}}>
                <Button 
                onClick={editAction} 
                title={'Edit'} 
                className='primary'  />
                
            </div>
            <div  onClick={(e) => {
                e.stopPropagation()}}>
                <Button 
                onClick={deleteAction} 
                title={'Delete'} 
                className='secondary' />
              
            </div>
        </li>
    )
}

export default ListItem;