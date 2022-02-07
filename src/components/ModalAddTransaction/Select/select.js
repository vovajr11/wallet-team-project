export const MenuProps = {
    PaperProps:{
        sx: {
            fontFamily: 'Abel',
            backgroundColor:
                'rgba(255, 255, 255, 0.5)',
            backdropFilter: 'blur(50px)',
            boxShadow:
                '0px 6px 15px rgb(0 0 0 / 10%)',
            borderRadius: '20px',
            '& .MuiMenuItem-root': {
                fontFamily: 'Abel',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '18px',
                lineHeight: '23px',
                padding: '10px 20px'
            },
            '& .MuiMenuItem-root:hover,.Mui-selected':
                {
                    color: '#FF6596',
                    backgroundColor: '#FFFFFF',
                },
            '& .MuiInput-input:focus': {
                backgroundColor: 'transparent',
            }
        }
    }
}